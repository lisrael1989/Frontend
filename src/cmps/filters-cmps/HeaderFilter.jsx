import { Route, Router, useLocation, useNavigate } from 'react-router';
import { LocationFilter } from './LocationFilter';
import { TextFilter } from './TextFilter';
import { useEffect, useState } from 'react';

export function HeaderFilter() {
  const urlLocation = useLocation()
  const [isRestIdRoute, setIsRestIdRoute] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const isRestIdRoute = /\/rest\/\d+/.test(urlLocation.pathname)
    setIsRestIdRoute(isRestIdRoute)
  }, [urlLocation])

  function onBack() {
    navigate("/")
  }

  return (
    <section className="header-filter main-container ">
      <div className="flex" style={{ gap: '20px' }}>
        {isRestIdRoute &&
          <span className='back-btn-container' onClick={() => onBack()}>
            <span className='arrow-back'>
              <svg
                fill="#000000"
                stroke="#000"
                strokeWidth="10"
                height="20px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.006 512.006"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z" />
                  </g>
                </g>
              </svg>
            </span>
            <button className='back-btn'>Back to restaurant list</button>
          </span>
        }
        <LocationFilter />
        <TextFilter />
      </div>
    </section>
  );
}
