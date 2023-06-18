import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 639px)')

    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches)
    }

    setIsMobile(mobileMediaQuery.matches)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}

export default useIsMobile
