'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function BlockPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/landing')
    }, 5000) // Redirect after 3 seconds

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100">
      <Image src="/logo.svg" alt="Salarify Logo" width={200} height={200} className="animate-pulse" />
    </div>
  )
}