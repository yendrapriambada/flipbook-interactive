import { createContext, useContext, useMemo, useState } from 'react'

const AnswersContext = createContext(null)

export function AnswersProvider({ children }) {
  const [answers, setAnswers] = useState({
    q1: Array(6).fill(''),
    q2: { choice: null, reason: '' },
    q3: { link: '', analysis: '', peerReview: '' },
    q4: { tech: '', reason: '' },
    q5: { choice: '', reason: '' },
    q6: { willDelegate: null, reason: '', workLink: '' },
    q7: { answer: '' },
    q8: { link: '', summary: '', features: '' },
    q9: { posterLink: '', needDiscussion: null, reason: '', benefits: '' },
    q10: { involvement: '', tableInfo: '' },
    s1: { answer: '' },
    s3: { left: '', slides: Array(5).fill('') },
    s4: { order: Array(6).fill(null), entries: Array(6).fill('') },
    s7: { a1: '', a2: '' },
  })
  const [userId, setUserId] = useState('')

  const api = useMemo(() => {
    return {
      answers,
      userId,
      setUserId,
      setQ1At(index, value) {
        setAnswers((prev) => {
          const next = [...prev.q1]
          next[index] = value
          return { ...prev, q1: next }
        })
      },
      setQ2Choice(val) {
        setAnswers((prev) => ({ ...prev, q2: { ...prev.q2, choice: val } }))
      },
      setQ2Reason(val) {
        setAnswers((prev) => ({ ...prev, q2: { ...prev.q2, reason: val } }))
      },
      setQ3Link(val) {
        setAnswers((prev) => ({ ...prev, q3: { ...prev.q3, link: val } }))
      },
      setQ3Analysis(val) {
        setAnswers((prev) => ({ ...prev, q3: { ...prev.q3, analysis: val } }))
      },
      setQ3PeerReview(val) {
        setAnswers((prev) => ({ ...prev, q3: { ...prev.q3, peerReview: val } }))
      },
      setQ4Tech(val) {
        setAnswers((prev) => ({ ...prev, q4: { ...prev.q4, tech: val } }))
      },
      setQ4Reason(val) {
        setAnswers((prev) => ({ ...prev, q4: { ...prev.q4, reason: val } }))
      },
      setQ5Choice(val) {
        setAnswers((prev) => ({ ...prev, q5: { ...prev.q5, choice: val } }))
      },
      setQ5Reason(val) {
        setAnswers((prev) => ({ ...prev, q5: { ...prev.q5, reason: val } }))
      },
      setQ6WillDelegate(val) {
        setAnswers((prev) => ({ ...prev, q6: { ...prev.q6, willDelegate: val } }))
      },
      setQ6Reason(val) {
        setAnswers((prev) => ({ ...prev, q6: { ...prev.q6, reason: val } }))
      },
      setQ6WorkLink(val) {
        setAnswers((prev) => ({ ...prev, q6: { ...prev.q6, workLink: val } }))
      },
      setQ7Answer(val) {
        setAnswers((prev) => ({ ...prev, q7: { ...prev.q7, answer: val } }))
      },
      setQ8Link(val) {
        setAnswers((prev) => ({ ...prev, q8: { ...prev.q8, link: val } }))
      },
      setQ8Summary(val) {
        setAnswers((prev) => ({ ...prev, q8: { ...prev.q8, summary: val } }))
      },
      setQ8Features(val) {
        setAnswers((prev) => ({ ...prev, q8: { ...prev.q8, features: val } }))
      },
      setQ9PosterLink(val) {
        setAnswers((prev) => ({ ...prev, q9: { ...prev.q9, posterLink: val } }))
      },
      setQ9NeedDiscussion(val) {
        setAnswers((prev) => ({ ...prev, q9: { ...prev.q9, needDiscussion: val } }))
      },
      setQ9Reason(val) {
        setAnswers((prev) => ({ ...prev, q9: { ...prev.q9, reason: val } }))
      },
      setQ9Benefits(val) {
        setAnswers((prev) => ({ ...prev, q9: { ...prev.q9, benefits: val } }))
      },
      setQ10Involvement(val) {
        setAnswers((prev) => ({ ...prev, q10: { ...prev.q10, involvement: val } }))
      },
      setQ10TableInfo(val) {
        setAnswers((prev) => ({ ...prev, q10: { ...prev.q10, tableInfo: val } }))
      },
      setS1Answer(val) {
        setAnswers((prev) => ({ ...prev, s1: { ...prev.s1, answer: val } }))
      },
      setS3Left(val) {
        setAnswers((prev) => ({ ...prev, s3: { ...prev.s3, left: val } }))
      },
      setS3SlideAt(index, val) {
        setAnswers((prev) => {
          const nextSlides = [...prev.s3.slides]
          nextSlides[index] = val
          return { ...prev, s3: { ...prev.s3, slides: nextSlides } }
        })
      },
      setS4OrderAt(index, id) {
        setAnswers((prev) => {
          const nextOrder = [...prev.s4.order]
          nextOrder[index] = id
          return { ...prev, s4: { ...prev.s4, order: nextOrder } }
        })
      },
      setS4OrderAll(orderArr) {
        setAnswers((prev) => ({ ...prev, s4: { ...prev.s4, order: orderArr } }))
      },
      setS4EntryAt(index, val) {
        setAnswers((prev) => {
          const nextEntries = [...prev.s4.entries]
          nextEntries[index] = val
          return { ...prev, s4: { ...prev.s4, entries: nextEntries } }
        })
      },
      setS7A1(val) {
        setAnswers((prev) => ({ ...prev, s7: { ...prev.s7, a1: val } }))
      },
      setS7A2(val) {
        setAnswers((prev) => ({ ...prev, s7: { ...prev.s7, a2: val } }))
      },
      getReportLines() {
        const toLabel = (val) =>
          val === null ? '' : val === true ? 'Ya' : val === false ? 'Tidak' : ''
        const joinPipe = (arr) =>
          arr
            .map((s) => (typeof s === 'string' ? s.trim() : s))
            .filter((s) => !!s)
            .join(' || ')
        const line1 = joinPipe([answers.s1.answer])
        const line2 = joinPipe([answers.q5.choice, answers.q5.reason])
        const slidesParts = answers.s3.slides
          .map((s, i) => (s && s.trim() ? `Slide ${i + 1} = ${s.trim()}` : ''))
          .filter(Boolean)
        const slidesStr = slidesParts.join(' / ')
        const line3 =
          (answers.s3.left && answers.s3.left.trim()) || slidesStr
            ? joinPipe([
                answers.s3.left && answers.s3.left.trim(),
                slidesStr || null,
              ])
            : ''
        const orderedIds = answers.s4.order.filter((n) => typeof n === 'number' && n > 0)
        const orderStr = orderedIds.length ? orderedIds.join('-') : ''
        const pairsByIdOrder = orderedIds
          .map((id) => `${id} = ${(answers.s4.entries[id - 1] || '').trim()}`)
          .join(' / ')
        const line4 = joinPipe([orderStr || null, pairsByIdOrder || null])
        const line5 = joinPipe([answers.q7.answer])
        const line6 = joinPipe([answers.q10.involvement, answers.q10.tableInfo])
        const line7 = joinPipe([answers.s7.a1, answers.s7.a2])
        const line8 = joinPipe([answers.q8.link, answers.q8.summary])
        const line9 = joinPipe([toLabel(answers.q9.needDiscussion), answers.q9.posterLink, answers.q9.reason])
        return [line1, line2, line3, line4, line5, line6, line7, line8, line9]
      },
    }
  }, [answers, userId])

  return <AnswersContext.Provider value={api}>{children}</AnswersContext.Provider>
}

export function useAnswers() {
  const ctx = useContext(AnswersContext)
  if (!ctx) throw new Error('useAnswers must be used within AnswersProvider')
  return ctx
}
