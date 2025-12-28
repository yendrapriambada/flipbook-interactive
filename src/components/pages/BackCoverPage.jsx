import { forwardRef } from 'react'

const BackCoverPage = forwardRef(function BackCoverPage(props, ref) {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-cover-content">
        <div className="cover-board">
          <div className="cover-board-inner">
            <h2 className="cover-title">Terima Kasih</h2>
          </div>
        </div>
      </div>
    </div>
  )
})

export default BackCoverPage

