import { useContext } from 'react'
import { AnswersContext } from './ContextBase'

export default function useAnswers() {
  const ctx = useContext(AnswersContext)
  if (!ctx) throw new Error('useAnswers must be used within AnswersProvider')
  return ctx
}
