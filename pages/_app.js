import React, { useState, useEffect } from 'react';
import { ScrollTop } from '../util/contexts'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../util/theme'

const PAGE_Y_OFFSET_TOP = 0;
function MyApp({ Component, pageProps }) {

  /**
   * true if scroll in in top position
   */
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    setScrollTop(window.pageYOffset <= PAGE_Y_OFFSET_TOP)
  }, []);
  useEffect(() => {
    let ticking = false;
    const updateScrollTop = () => {
      const isTop = window.pageYOffset <= PAGE_Y_OFFSET_TOP;
      if((scrollTop && isTop) || (!scrollTop && !isTop)) {
        ticking = false;
        return;
      }
      setScrollTop(isTop);
      console.log('isTop', isTop)
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollTop);
        ticking = true;
      }
    };
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const getLayout = Component.getLayout || ((page) => page)
  return <ThemeProvider theme={theme}>
    <ScrollTop.Provider value={scrollTop}>
      {getLayout(<Component {...pageProps} />)}
      </ScrollTop.Provider>
  </ThemeProvider>
}

export default MyApp
