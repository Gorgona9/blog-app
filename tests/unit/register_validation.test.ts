import { describe, expect, it, vi } from 'vitest'
import { getUserByUserName } from '~~/server/database/repositories/userRespository'
import { validate } from '../../server/app/services/validator'


describe('test email validation', async () => {

  vi.mock('~/server/database/repositories/userRespository', () => {
    return {
      getUserByEmail: vi.fn(() => ({ email: 'test@fullstackdev.com' })),
      getUserByUserName: vi.fn(() => ({ email: 'test@fullstackdev.com' }))
    }
  })


  it('should return error if email missing', async () => {
    const res = await validate({
      username: '',
      name: '',
      email: null,
      password: '1234567'
    })

    const emailVal = res.get('email')

    expect(res.has('email')).toBe(true)
    expect(emailVal?.message).toContain('Email is invalid or already taken')
  })


  it('should return error for improperly formatted email', async () => {
    const res = await validate({
      username: '',
      name: '',
      email: 'test',
      password: '1234567'
    })

    const emailVal = res.get('email')

    expect(res.has('email')).toBe(true)
    expect(emailVal?.message).toContain('Email is invalid or already taken')
  })

  it('should return error if email taken', async () => {

    const email = 'test@fullstackdev.com'

    const res = await validate({
      username: '',
      name: '',
      email: email,
      password: '1234567'
    })

    const emailVal = res.get('email')

    expect(res.has('email')).toBe(true)
    expect(emailVal?.message).toContain(`Email is invalid or already taken`)
  })
})
