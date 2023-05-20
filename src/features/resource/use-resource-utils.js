import { PERSON_BASE_URL } from '@/features/persons'
import { NOTES_BASE_URL } from '@/features/notes'

export const getResourceName = (url) => {
  switch (url) {
    case PERSON_BASE_URL:
      return { singular: 'Person', plural: 'Persons' }
    case NOTES_BASE_URL:
      return { singular: 'Note', plural: 'Notes' }
    default:
      return { singular: 'Resource', plural: 'Resources' }
  }
}
