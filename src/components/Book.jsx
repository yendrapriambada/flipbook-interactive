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
import { AnswersProvider } from '../context/AnswersContext'

function Book() {
  const bookRef = useRef(null)
  const [story, setStory] = useState('')
  const [inputMode, setInputMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pageSize, setPageSize] = useState({
    width: 450,
    height: 570,
  })

  useEffect(() => {
    const updateSize = () => {
      const viewportWidth = window.innerWidth
      const aspectRatio = 570 / 450

      let width

      if (viewportWidth <= 640) {
        width = Math.max(260, viewportWidth * 0.9)
      } else if (viewportWidth <= 1024) {
        width = Math.min(Math.max(320, viewportWidth * 0.5), 480)
      } else {
        width = Math.min(Math.max(360, viewportWidth * 0.35), 520)
      }

      const height = width * aspectRatio

      setPageSize({
        width,
        height,
      })
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

  const handleNext = () => {
    if (bookRef.current) {
      const pageFlip = bookRef.current.pageFlip()
      if (pageFlip) {
        const current = pageFlip.getCurrentPageIndex()
        const total = pageFlip.getPageCount()
        if (current < total - 1) {
          pageFlip.flipNext()
        }
      }
    }
  }

  const handleStoryChange = (event) => {
    setStory(event.target.value)
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

  return (
    <div className="flipbook-layout">
      <header className="flipbook-header">
        <h1 className="flipbook-title">
          <span>Interactive</span>{' '}
          <span className="flipbook-title-accent">Flipbook</span>
        </h1>
        <p className="flipbook-subtitle">
          Pengalaman membaca digital yang interaktif dengan berbagai jenis konten
        </p>
      </header>

      <AnswersProvider>
        <HTMLFlipBook
          ref={bookRef}
          width={pageSize.width}
          height={pageSize.height}
          minWidth={280}
          maxWidth={450}
          minHeight={380}
          maxHeight={600}
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
        onFlip={() => {
          const pageFlip = bookRef.current?.pageFlip()
          if (pageFlip) {
            setCurrentIndex(pageFlip.getCurrentPageIndex())
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
      </AnswersProvider>

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
