import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from './pages/CoverPage'
import AnnouncementPage from './pages/AnnouncementPage'
import ProcessDragPage from './pages/ProcessDragPage'
import StudentFieldPage from './pages/StudentFieldPage'
import TeacherTaskPage from './pages/TeacherTaskPage'
import ContextPage from './pages/ContextPage'
import VideoDiscoveryPage from './pages/VideoDiscoveryPage'
 
import VideoGalleryPage from './pages/VideoGalleryPage'
import ExpertOpinionPage from './pages/ExpertOpinionPage'
import ExpertSelectionPage from './pages/ExpertSelectionPage'
import IntroImagePage from './pages/IntroImagePage'
import ExperiencePage from './pages/ExperiencePage'
import QuestionPage from './pages/QuestionPage'
import PresentationTopicPage from './pages/PresentationTopicPage'
 
import PresentationSlidesLayoutPage from './pages/PresentationSlidesLayoutPage'
import JournalPortraitPage from './pages/JournalPortraitPage'
  
import BreakingNewsPage from './pages/BreakingNewsPage'
import NewsletterPage from './pages/NewsletterPage'
import DigitalResourcePage from './pages/DigitalResourcePage'
import DigitalResourceLeftPage from './pages/DigitalResourceLeftPage'
import DigitalResourceRightPage from './pages/DigitalResourceRightPage'
import DigitalResourceQuestionPage from './pages/DigitalResourceQuestionPage'
import HamkaSpeechQuestionPage from './pages/HamkaSpeechQuestionPage'
import PosterAppsLeftPage from './pages/PosterAppsLeftPage'
import PosterTaskRightPage from './pages/PosterTaskRightPage'
import AnswerReportPage from './pages/AnswerReportPage'
import BackCoverPage from './pages/BackCoverPage'
import BoraksSamplesPage from './pages/BoraksSamplesPage'
import BoraksQuestionsPage from './pages/BoraksQuestionsPage'
import useAnswers from '../context/useAnswers'

function Book() {
  const bookRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pageSize, setPageSize] = useState({
    width: 450,
    height: 570,
  })
  const [isSinglePage, setIsSinglePage] = useState(false)
  const { answers, userId } = useAnswers()

  const answersRef = useRef(answers)
  const userIdRef = useRef(userId)
  const currentIndexRef = useRef(currentIndex)

  useEffect(() => {
    answersRef.current = answers
    userIdRef.current = userId
    currentIndexRef.current = currentIndex
  }, [answers, userId, currentIndex])

  useEffect(() => {
    const updateSize = () => {
      const viewportWidth = window.innerWidth
      const aspectRatio = 570 / 450

      let width

      if (viewportWidth <= 640) {
        width = Math.max(300, viewportWidth * 0.92)
      } else if (viewportWidth <= 1024) {
        width = Math.min(Math.max(360, viewportWidth * 0.58), 560)
      } else {
        width = Math.min(Math.max(420, viewportWidth * 0.46), 650)
      }

      const height = width * aspectRatio

      setPageSize({
        width,
        height,
      })
      setIsSinglePage(viewportWidth <= 680)
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  const handlePrev = () => {
    if (bookRef.current) {
      const pageFlip = bookRef.current.pageFlip()
      if (pageFlip) {
        const current = pageFlip.getCurrentPageIndex()
        if (current > 0) {
          pageFlip.flipPrev()
        }
      }
    }
  }

  const validatePage = (idx) => {
    const trim = (s) => (typeof s === 'string' ? s.trim() : '')
    const currentAnswers = answersRef.current
    const currentUserId = userIdRef.current
    switch (idx) {
      case 0:
        return !!trim(currentUserId)
      case 8:
        return !!trim(currentAnswers.q5.choice) && !!trim(currentAnswers.q5.reason)
      case 10:
        return (
          !!trim(currentAnswers.s3.left) &&
          currentAnswers.s3.slides.every((s) => !!trim(s))
        )
      case 12: {
        const allSlotsFilled = currentAnswers.s4.order.every((n) => typeof n === 'number' && n > 0)
        const allEntries = currentAnswers.s4.entries.every((s) => !!trim(s))
        const hasExplanation = !!trim(currentAnswers.s4.explanation)
        return allSlotsFilled && allEntries && hasExplanation
      }
      case 5:
        return !!trim(currentAnswers.s1.answer)
      case 14:
        return !!trim(currentAnswers.q7.answer) && !!trim(currentAnswers.q8.features) && !!trim(currentAnswers.q9.benefits)
      case 16:
        return !!trim(currentAnswers.q10.involvement) && !!trim(currentAnswers.q10.tableInfo)
      case 18:
        return !!trim(currentAnswers.s7.a1) && !!trim(currentAnswers.s7.a2)
      case 20:
        return !!trim(currentAnswers.q8.link) && !!trim(currentAnswers.q8.summary)
      case 22:
        return (
          !!trim(currentAnswers.q9.posterLink) &&
          currentAnswers.q9.needDiscussion !== null &&
          !!trim(currentAnswers.q9.reason)
        )
      default:
        return true
    }
  }

  const handleNext = () => {
    if (bookRef.current) {
      const pageFlip = bookRef.current.pageFlip()
      if (pageFlip) {
        const current = pageFlip.getCurrentPageIndex()
        const total = pageFlip.getPageCount()
        if (current < total - 1) {
          if (!isSinglePage) {
            const nextIdx = Math.min(current + 1, total - 1)
            if (!validatePage(current) || !validatePage(nextIdx)) {
              alert('Lengkapi semua kolom input sebelum lanjut ke halaman berikutnya.')
              return
            }
          } else {
            if (!validatePage(current)) {
            alert('Lengkapi semua kolom input sebelum lanjut ke halaman berikutnya.')
            return
          }
          }
          pageFlip.flipNext()
        }
      }
    }
  }

  useEffect(() => {
    const updatePageMetrics = () => {
      const pageFlip = bookRef.current?.pageFlip()
      if (pageFlip) {
        setCurrentIndex(pageFlip.getCurrentPageIndex())
        setTotalPages(pageFlip.getPageCount())
      }
    }
    updatePageMetrics()
    const id = setInterval(updatePageMetrics, 250)
    return () => clearInterval(id)
  }, [])

  const flipbookElement = React.useMemo(() => {
    return (
      <HTMLFlipBook
        ref={bookRef}
        width={pageSize.width}
        height={pageSize.height}
        minWidth={320}
        maxWidth={650}
        minHeight={420}
        maxHeight={820}
        size="stretch"
        maxShadowOpacity={0.7}
        flippingTime={400}
        drawShadow
        showCover
        showPageCorners
        mobileScrollSupport
        disableFlipByClick={true}
        swipeDistance={80}
        useMouseEvents={true}
        className="flipbook-book"
        onFlip={(e) => {
          const pageFlip = bookRef.current?.pageFlip()
          if (pageFlip) {
            const newIndex = e.data;
            const curIdx = currentIndexRef.current;
            
            // Validate if trying to move forward
            if (newIndex > curIdx) {
              const isValid = isSinglePage 
                ? validatePage(curIdx) 
                : (validatePage(curIdx) && validatePage(Math.min(curIdx + 1, pageFlip.getPageCount() - 1)));
                
              if (!isValid) {
                setTimeout(() => {
                  pageFlip.turnToPage(curIdx);
                }, 10);
                setTimeout(() => {
                  alert('Lengkapi semua kolom input sebelum lanjut ke halaman berikutnya.');
                }, 300);
                return;
              }
            }
            
            setCurrentIndex(newIndex)
            setTotalPages(pageFlip.getPageCount())
          }
        }}
      >
        <CoverPage />
        <StudentFieldPage />
        <TeacherTaskPage />
        <ContextPage />
        <VideoDiscoveryPage />
        <VideoGalleryPage />
        <BreakingNewsPage />
        <ExpertOpinionPage />
        <ExpertSelectionPage />
        <PresentationTopicPage />
        <PresentationSlidesLayoutPage />
        <AnnouncementPage />
        <ProcessDragPage />
        <JournalPortraitPage />
        <DigitalResourceQuestionPage />
        <BoraksSamplesPage />
        <BoraksQuestionsPage />
        <NewsletterPage />
        <HamkaSpeechQuestionPage />
        <DigitalResourceLeftPage />
        <DigitalResourceRightPage />
        <PosterAppsLeftPage />
        <PosterTaskRightPage />
        <AnswerReportPage />
        <BackCoverPage />
      </HTMLFlipBook>
    )
  }, [pageSize, isSinglePage])

  return (
    <div className="flipbook-layout">
      {flipbookElement}

      <footer className="flipbook-footer">
        <div className="flipbook-nav">
          <button
            type="button"
            className="nav-button nav-button-secondary"
            onClick={handlePrev}
            disabled={currentIndex <= 0}
          >
            <span className="nav-icon">‹</span>
            <span>Sebelumnya</span>
          </button>
          <button
            type="button"
            className="nav-button nav-button-primary"
            onClick={handleNext}
            disabled={currentIndex >= totalPages - 1}
          >
            <span>Selanjutnya</span>
            <span className="nav-icon nav-icon-right">›</span>
          </button>
        </div>
        <p className="flipbook-tip">
          Halaman {currentIndex + 1} dari {totalPages} · Tip: Klik atau geser halaman untuk membalik
        </p>
      </footer>
    </div>
  )
}

export default Book
