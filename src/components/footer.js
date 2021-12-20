import React from 'react'
import { Link } from 'gatsby'

import gatsby from '../images/gatsby.png'

const links = [
  { url: 'https://beian.miit.gov.cn', label: '辽ICP备19013759号',icon:'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png' },
]
const internalLinks = [{ url: '/rss.xml', label: 'RSS' }]
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  // CC BY-NC-SA 4.0
  { url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh',label:'知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议',icon : 'https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png'}
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Built with ❤</span>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <img src={link.icon} alt={link.label} />
              <span>{link.label}</span>
            </a>
          ))}
          {internalLinks.map((link) => (
            <Link to={link.url} key={link.url}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}
