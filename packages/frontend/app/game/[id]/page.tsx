'use client'

import { useParams } from 'next/navigation'
import PageBoard from '../../components/PageBoard'

export default function Game() {
  const params = useParams()

  return(
    <div>
      <PageBoard gameId={params.id}/>
    </div>
  )
}