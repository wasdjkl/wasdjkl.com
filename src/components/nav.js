import React from 'react'
import { Link } from 'gatsby'

import blog from '../images/nav-blog.png'
import avatar from '../images/nav-avatar.png'
import github from '../images/nav-github.png'
import projects from '../images/nav-projects.png'
import twitter from '../images/nav-twitter.png'

const mainNavItems = [
  { url: '/blog', icon: blog, label: 'Articles' },
  { url: '/projects', icon: projects, label: 'Projects' },
  { url: '/me', icon: avatar, label: 'About me' },
]

const socialNavItems = [
  { url: 'https://github.com/wasdjkl', icon: github, label: 'GitHub' },
  { url: 'https://twitter.com/wasdjkl_', icon: twitter, label: 'Twitter' },
]

export const Nav = () => {
  return (
    <aside className="navbar">
      <section>
        <nav>
          {mainNavItems.map((item) => (
            <Link to={item.url} key={item.label} activeClassName="active">
              <img src={item.icon} alt={item.label} />
              <div className="tooltip">{item.label}</div>
            </Link>
          ))}
        </nav>
        <nav>
          {socialNavItems.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.label}
            >
              <img src={item.icon} alt={item.label} />
              <div className="tooltip">{item.label}</div>
            </a>
          ))}
        </nav>
      </section>
    </aside>
  )
}
