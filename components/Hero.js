import { useState } from 'react'

const CONTRACT = '0x1234567890ABCDEF1234567890ABCDEF12345678'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className='text-white text-center py-24 bg-[url("https://i.imgur.com/zL4Krbz.jpg")] bg-cover'>
      <h1 className='text-5xl md:text-6xl font-bold'>Welcome to $WAKIKI</h1>
      <p className='mt-4 text-xl max-w-2xl mx-auto'>The wildest memecoin in the jungle. Fun, fearless, and fully on-chain.</p>
      <button onClick={handleCopy} className='mt-6 px-4 py-2 bg-green-600 rounded-full text-sm'>
        {copied ? 'Copied!' : 'Copy Contract'}
      </button>
      <p className='mt-2 text-sm'>{CONTRACT}</p>
    </section>
  )
}
