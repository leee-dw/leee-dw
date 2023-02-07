import React from 'react'

type Props = {
  darkMode?: boolean
}

const Utterances = ({ darkMode }: Props) => (
  <section
    style={{
      backgroundColor: darkMode ? '#2f3437' : '#fff'
    }}
    ref={(elem) => {
      if (!elem) {
        return
      }
      const scriptElem = document.createElement('script')
      scriptElem.src = 'https://utteranc.es/client.js'
      scriptElem.async = true
      scriptElem.setAttribute('repo', 'leee-dw/leee-dw')
      scriptElem.setAttribute('issue-term', 'pathname')
      scriptElem.setAttribute(
        'theme',
        darkMode ? 'github-dark' : 'github-light'
      )
      scriptElem.setAttribute('label', 'blog-comment')
      scriptElem.crossOrigin = 'anonymous'
      elem.appendChild(scriptElem)
    }}
  />
)

export default Utterances
