import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//<StrictMode> 의 역할 : 미래의 리액트 버전과 호환성을 높이고 잠재적 버그를 찾음.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
