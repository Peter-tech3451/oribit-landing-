import { useState } from 'react'
import './Support.css'

const Support = () => {
  const [copied, setCopied] = useState(false)

  const copyAccount = () => {
    navigator.clipboard.writeText('6668981913')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="support" id="contact">
      <h2>Support Our Mission</h2>
      <p className="support-sub">
        Your generous contributions enable us to continue our vital work across the globe,
        reaching more lives and creating lasting impact.
      </p>

      <div className="bank-card">
        <h3>Bank Transfer</h3>
        <p className="bank-desc">
          Transfer funds directly to our bank account. Your support makes a difference.
        </p>

        <div className="account-row">
          <span className="account-num">MONIEPOINT MFB: 6668981913</span>
          <button className="copy-btn" onClick={copyAccount} title="Copy account number">
            {copied ? '✓' : '⧉'}
          </button>
        </div>

        <button className="btn-name">Orbit Initiatives (Ayobami Johnson)</button>
      </div>

      <p className="support-thanks">
        Thank you for your invaluable support in helping us create a better future!
      </p>
    </section>
  )
}

export default Support
