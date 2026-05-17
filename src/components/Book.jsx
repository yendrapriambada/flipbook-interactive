import React, { useCallback, useEffect, useRef, useState } from 'react'
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

const PAGES = [
  CoverPage,
  StudentFieldPage,
  TeacherTaskPage,
  ContextPage,
  VideoDiscoveryPage,
  VideoGalleryPage,
  BreakingNewsPage,
  ExpertOpinionPage,
  ExpertSelectionPage,
  PresentationTopicPage,
  PresentationSlidesLayoutPage,
  AnnouncementPage,
  ProcessDragPage,
  JournalPortraitPage,
  DigitalResourceQuestionPage,
  BoraksSamplesPage,
  BoraksQuestionsPage,
  NewsletterPage,
  HamkaSpeechQuestionPage,
  DigitalResourceLeftPage,
  DigitalResourceRightPage,
  PosterAppsLeftPage,
  PosterTaskRightPage,
  AnswerReportPage,
  BackCoverPage,
]

const LOGICAL_PAGE_COUNT = PAGES.length

const shouldBypassRequired = () => {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return (
    params.get('bypassRequired') === '1' ||
    params.get('bypass') === '1' ||
    window.localStorage.getItem('bypassRequired') === '1'
  )
}

function Book() {
  const bookRef = useRef(null)
  const prevIndexRef = useRef(0)
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

  const getLastUsefulPageIndex = useCallback(() => (
    isSinglePage ? LOGICAL_PAGE_COUNT - 1 : LOGICAL_PAGE_COUNT - 2
  ), [isSinglePage])

  const getVisiblePageNumber = () => {
    if (currentIndex <= 0) return 1
    const offset = isSinglePage ? 1 : 2
    return Math.min(currentIndex + offset, LOGICAL_PAGE_COUNT)
  }

  useEffect(() => {
    answersRef.current = answers
    userIdRef.current = userId
    currentIndexRef.current = currentIndex
  }, [answers, userId, currentIndex])

  useEffect(() => {
    const updateSize = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const aspectRatio = 570 / 450

      let width

      if (viewportWidth <= 640) {
        width = Math.max(300, viewportWidth * 0.92)
      } else if (viewportWidth <= 1024) {
        width = Math.min(Math.max(420, viewportWidth * 0.74), 620)
      } else {
        width = Math.min(Math.max(420, viewportWidth * 0.46), 650)
      }

      const singlePage = viewportWidth <= 1024
      const reservedHeight = singlePage ? 150 : 130
      const maxHeight = Math.max(420, viewportHeight - reservedHeight)
      width = Math.min(width, maxHeight / aspectRatio)

      const height = width * aspectRatio

      setPageSize({
        width,
        height,
      })
      setIsSinglePage(singlePage)
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  const handlePrev = () => {
    const pf = bookRef.current?.pageFlip()
    if (!pf) return
    const settings = pf.getSettings()
    settings.disableFlipByClick = false
    pf.flipPrev()
    setTimeout(() => { settings.disableFlipByClick = true }, 500)
  }

  const validatePage = useCallback((idx) => {
    if (shouldBypassRequired()) return true

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
  }, [])

  // In single-page/mobile mode, pageflip's internal index can be one step
  // ahead of the visible page number. Shift validation index accordingly.
  const getSinglePageValidationIndex = (idx) => Math.max(0, idx - 1)

  const handleNext = () => {
    if (bookRef.current) {
      const pageFlip = bookRef.current.pageFlip()
      if (pageFlip) {
        const current = pageFlip.getCurrentPageIndex()
        const lastUsefulIndex = getLastUsefulPageIndex()
        if (current >= lastUsefulIndex) {
          pageFlip.turnToPage(lastUsefulIndex)
          setCurrentIndex(lastUsefulIndex)
          prevIndexRef.current = lastUsefulIndex
          return
        }

        if (!isSinglePage) {
          const nextIdx = Math.min(current + 1, lastUsefulIndex)
          if (!validatePage(current) || !validatePage(nextIdx)) {
            alert('Lengkapi semua kolom input sebelum lanjut ke halaman berikutnya.')
            return
          }
        } else {
          const validationIdx = getSinglePageValidationIndex(current)
          if (!validatePage(validationIdx)) {
            alert('Lengkapi semua kolom input sebelum lanjut ke halaman berikutnya.')
            return
          }
        }
        pageFlip.flipNext()
      }
    }
  }

  useEffect(() => {
    const updatePageMetrics = () => {
      const pageFlip = bookRef.current?.pageFlip()
      if (pageFlip) {
        const nextIndex = pageFlip.getCurrentPageIndex()
        setCurrentIndex(nextIndex)
        setTotalPages(LOGICAL_PAGE_COUNT)
        prevIndexRef.current = nextIndex
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
        mobileScrollSupport={isSinglePage}
        disableFlipByClick={true}
        swipeDistance={isSinglePage ? 9999 : 80}
        useMouseEvents={!isSinglePage}
        className="flipbook-book"
        onFlip={(e) => {
          const pageFlip = bookRef.current?.pageFlip()
          if (pageFlip) {
            const newIndex = e.data;
            const lastUsefulIndex = getLastUsefulPageIndex()
            const curIdx = currentIndexRef.current;

            if ((curIdx >= lastUsefulIndex && newIndex === 0) || newIndex > lastUsefulIndex) {
              setTimeout(() => {
                pageFlip.turnToPage(lastUsefulIndex)
                setCurrentIndex(lastUsefulIndex)
                prevIndexRef.current = lastUsefulIndex
              }, 0)
              return
            }
            
            // Validate if trying to move forward
            if (newIndex > curIdx) {
              const isValid = isSinglePage 
                ? validatePage(getSinglePageValidationIndex(curIdx))
                : (validatePage(curIdx) && validatePage(Math.min(curIdx + 1, lastUsefulIndex)));
                
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
            setTotalPages(LOGICAL_PAGE_COUNT)
            prevIndexRef.current = newIndex
          }
        }}
      >
        {PAGES.map((PageComponent, index) => (
          <PageComponent key={index} />
        ))}
      </HTMLFlipBook>
    )
  }, [pageSize, isSinglePage, validatePage, getLastUsefulPageIndex])

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
            disabled={currentIndex >= getLastUsefulPageIndex()}
          >
            <span>Selanjutnya</span>
            <span className="nav-icon nav-icon-right">›</span>
          </button>
        </div>
        <p className="flipbook-tip">
          Halaman {getVisiblePageNumber()} dari {totalPages || LOGICAL_PAGE_COUNT} · Tip: Klik atau geser halaman untuk membalik
        </p>
      </footer>
    </div>
  )
}

export default Book
