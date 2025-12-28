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
    q8: { link: '', summary: '' },
    q9: { posterLink: '', needDiscussion: null, reason: '' },
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
      setQ9PosterLink(val) {
        setAnswers((prev) => ({ ...prev, q9: { ...prev.q9, posterLink: val } }))
      },
      setQ9NeedDiscussion(val) {
        setAnswers((prev) => ({ ...prev, q9: { ...prev.q9, needDiscussion: val } }))
      },
      setQ9Reason(val) {
        setAnswers((prev) => ({ ...prev, q9: { ...prev.q9, reason: val } }))
      },
      getReportLines() {
        const toLabel = (val) =>
          val === null ? '' : val === true ? 'Ya' : val === false ? 'Tidak' : ''
        const line1 = answers.q1.map((s) => s && s.trim()).filter(Boolean).join(', ')
        const line2 = [toLabel(answers.q2.choice), answers.q2.reason].filter(Boolean).join(', ')
        const line3 = [answers.q3.link, answers.q3.analysis, answers.q3.peerReview]
          .map((s) => s && s.trim())
          .filter(Boolean)
          .join(', ')
        const line4 = [answers.q4.tech, answers.q4.reason].map((s) => s && s.trim()).filter(Boolean).join(', ')
        const line5 = [answers.q5.choice, answers.q5.reason].map((s) => s && s.trim()).filter(Boolean).join(', ')
        const line6 = [
          toLabel(answers.q6.willDelegate),
          answers.q6.reason,
          answers.q6.workLink,
        ]
          .map((s) => s && s.trim())
          .filter(Boolean)
          .join(', ')
        const line7 = [answers.q7.answer].map((s) => s && s.trim()).filter(Boolean).join(', ')
        const line8 = [answers.q8.link, answers.q8.summary].map((s) => s && s.trim()).filter(Boolean).join(', ')
        const line9 = [
          toLabel(answers.q9.needDiscussion),
          answers.q9.posterLink,
          answers.q9.reason,
        ]
          .map((s) => s && s.trim())
          .filter(Boolean)
          .join(', ')
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
