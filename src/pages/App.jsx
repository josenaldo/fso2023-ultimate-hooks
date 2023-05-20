import { Route, Routes } from 'react-router-dom'

import { Template } from '@/features/layout'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import NotesPage from '@/pages/NotesPage'
import PersonsPage from '@/pages/PersonsPage'

const IndexPage = () => {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/persons" element={<PersonsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Template>
  )
}

export default IndexPage
