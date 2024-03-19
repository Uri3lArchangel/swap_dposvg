import Link from 'next/link'
import React from 'react'


function Footer({mode}:any) {
  return (
    <div className={mode.footer}>
      <button><Link href={'https://docs.google.com/document/d/1LRSTsiGrnMGwsQmrVjtZXzvRl1ydtGpK3KZE6JsQHQs/edit?pli=1'} target='_blank'>Whitepaper</Link></button>
      <button><Link target='_blank' href={'https://docs.google.com/document/d/1oTQAJUfLiW8FNJJA5-hGq0iVeerUDhZCf2VUpOze5Is/edit?usp=sharing'}>F10 SEC</Link></button>
      <button><Link target='_blank' href={'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c10cf1c5-acfd-344f-9c33-f3a95a82812d'}>THE PITCH</Link></button>
      <button><Link target='_blank' href={'https://docs.google.com/spreadsheets/d/1eD1bUY0YR4k5lNmDqVrZKJq5ocfgD7Kpz7akMRimE-U/edit'}>OFFERING DOCUMENTS</Link></button>
    </div>
  )
}

export default Footer