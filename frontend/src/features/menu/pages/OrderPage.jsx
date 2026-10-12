// OrderPage.jsx
// Contains a controlled order form with simple validation and a success message.
import { useState } from 'react'

function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '',
  })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.quantity) {
      newErrors.quantity = 'Quantity is required.'
    } else if (Number(formData.quantity) < 1) {
      newErrors.quantity = 'Quantity must be at least 1.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      setSuccessMessage('')
      return
    }

    setSuccessMessage(
      `Order placed successfully for ${formData.name} (${formData.quantity} item(s)).`
    )
    setFormData({ name: '', email: '', quantity: '' })
    setErrors({})
  }

  return (
    <section className="order-page">
      <h1>Order Page</h1>

      <form className="order-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={formData.name}
            onChange={(event) =>
              setFormData((current) => ({ ...current, name: event.target.value }))
            }
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>

        <label>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((current) => ({ ...current, email: event.target.value }))
            }
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>

        <label>
          Quantity
          <input
            type="number"
            min="1"
            value={formData.quantity}
            onChange={(event) =>
              setFormData((current) => ({ ...current, quantity: event.target.value }))
            }
          />
          {errors.quantity && (
            <span className="error-message">{errors.quantity}</span>
          )}
        </label>

        <button type="submit">Place Order</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  )
}

export default OrderPage
