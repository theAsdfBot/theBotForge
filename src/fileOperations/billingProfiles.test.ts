import * as funcs from './billingProfiles'
import fs, { writeFile } from 'fs'
import { BillingProfile } from '@typesTS/billingTypes'

jest.mock('fs')
jest.mock('electron')

describe('fileOperations/billingProfils', () => {
  const originalFsPromises = fs.promises
  const fileLocation = 'bloopiedoopie'
  let writeFile = jest.fn()
  beforeEach(() => {
    jest.spyOn(funcs, 'getLocation')
      .mockReturnValue(fileLocation)
    fs.promises = {
      writeFile
    } as unknown as typeof import('fs/promises')
  })
  afterEach(() => {
    fs.promises = originalFsPromises
    writeFile.mockReset()
    jest.resetAllMocks()
  })
  describe('billingProfilesExist', () => {
    it('checks the right location', () => {
      const spy = jest.spyOn(fs, 'existsSync')
      funcs.billingProfilesFileExist()
      expect(spy).toHaveBeenCalledWith(fileLocation)
    })
    it('returns correctly', () => {
      const exists = false
      jest.spyOn(fs, 'existsSync').mockReturnValue(exists)
      expect(funcs.billingProfilesFileExist()).toEqual(exists)
    })
  })
  describe('fetchBillingProfiles', () => {
    it('returns empty array if nothing exists', async () => {
      jest.spyOn(funcs, 'billingProfilesFileExist')
        .mockReturnValue(false)
      await expect(funcs.fetchBillingProfiles())
        .resolves.toEqual([])
    })
    it('returns the profiles', async () => {
      const profiles = [{
        foo: 'bar'
      }]
      jest.spyOn(funcs, 'billingProfilesFileExist')
        .mockReturnValue(true)
      fs.promises = {
        readFile: async () => Buffer.from(JSON.stringify(profiles))
      } as unknown as typeof import('fs/promises')
      await expect(funcs.fetchBillingProfiles())
        .resolves.toEqual(profiles)
    })
    it('throws an error if not an array', async () => {
      jest.spyOn(funcs, 'billingProfilesFileExist')
        .mockReturnValue(true)
      fs.promises = {
        readFile: async () => Buffer.from('{}')
      } as unknown as typeof import('fs/promises')
      await expect(funcs.fetchBillingProfiles())
        .rejects.toThrow(TypeError)
    })
  })
  describe('updateBillingProfiles', async () => {
    it('updates only the referenced billing profile', async () => {
      const payload = {
        id: 'bloopy',
        billingSameAsShipping: true
      }
      const existingProfiles = [{
        id: 'a'
      }, {
        id: payload.id
      }, {
        id: 'b'
      }]
      const expected = [
        existingProfiles[0],
        payload,
        existingProfiles[2]
      ]
      jest.spyOn(funcs, 'fetchBillingProfiles')
        .mockResolvedValue(existingProfiles)
      await funcs.updateBillingProfiles(payload as BillingProfile)
      // Test the second argument of the first call
      expect(writeFile.mock.calls[0][1])
        .toEqual(JSON.stringify(expected))
    })
    it('adds the new profile if it does not exist', async () => {
      const payload = {
        id: 'bloopy',
        billingSameAsShipping: true
      }
      const existingProfiles = [{
        id: 'a'
      }, {
        id: 'b'
      }]
      const expected = [
        payload,
        existingProfiles[0],
        existingProfiles[1]
      ]
      jest.spyOn(funcs, 'fetchBillingProfiles')
        .mockResolvedValue(existingProfiles)
      await funcs.updateBillingProfiles(payload as BillingProfile)
      // Test the second argument of the first call
      expect(writeFile.mock.calls[0][1])
        .toEqual(JSON.stringify(expected))
    })
  })
  describe('deleteBillingProfile', () => {
    it('deletes the profile by id', async () => {
      const existingProfiles = [{
        id: 'a'
      }, {
        id: 'b'
      }, {
        id: 'c'
      }]
      const expected = [
        existingProfiles[0],
        existingProfiles[2]
      ]
      jest.spyOn(funcs, 'fetchBillingProfiles')
        .mockResolvedValue(existingProfiles)
      await funcs.deleteBillingProfile(existingProfiles[1].id)
      expect(writeFile.mock.calls[0][1])
        .toEqual(JSON.stringify(expected))
    })
  })
})
