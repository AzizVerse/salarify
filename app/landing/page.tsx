import Image from 'next/image'
import AuthBox from '@/components/AuthBox'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-purple-100 p-10 flex flex-col">
        <Image src="/logo.svg" alt="Salarify Logo" width={150} height={150} className="mb-8" />
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Welcome to Salarify</h1>
        <p className="text-lg text-purple-600">
          Manage your salary, track expenses, and get personalized financial insights with ease.
        </p>
      </div>
      <div className="w-1/2 bg-white p-10 flex items-center justify-center">
        <AuthBox />
      </div>
    </div>
  )
}