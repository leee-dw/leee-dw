import * as React from 'react'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

type Props = {
  statusCode?: number
}

export const ErrorPage = ({ statusCode }: Props) => {
  const title = 'Error'

  return (
    <>
      <PageHead title={title} />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page</h1>
          {statusCode && <p>Error code: {statusCode}</p>}

          <img src='/error.png' alt='Error' className={styles.errorImage} />
        </main>
      </div>
    </>
  )
}
