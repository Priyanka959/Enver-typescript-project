import React, { useState } from 'react'

type VideoProps = {
  videoId?: string
  fullWidth?: boolean
}

export default function Video({ videoId = 'ZK-rNEhJIDs', fullWidth = false }: VideoProps) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const fallbackThumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const posterUrl = thumb

  return (
    <div className={`video-embed-wrapper ${fullWidth ? 'w-full' : 'mx-auto max-w-3xl'}`}>
      <div className="video-embed rounded-xl overflow-hidden">
        {!playing ? (
          <div
            className="video-poster"
            onClick={() => setPlaying(true)}
            style={{ backgroundImage: `url(${posterUrl}), url(${fallbackThumb})` }}
            role="button"
            aria-label="Play video"
          >
            <div className="video-play-btn">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 18v28l22-14L24 18z" fill="white" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            title="Enver intro video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
    </div>
  )
}
