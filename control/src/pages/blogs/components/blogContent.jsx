import React from 'react'
import style from '../Style/style.module.css'
import first from '../assets/ZuriChatBlogStater.png'
import Clock from '../assets/clock-black.svg'
import link from '../assets/link-black.svg'
import archImage from '../assets/ZuriArch.jpg'
import pluginImage from '../assets/ZuriPlugin.jpg'

import {
  UilFacebookF,
  UilTwitter,
  UilLinkedinAlt
} from '@iconscout/react-unicons'

const container = () => {
  return (
    <>
      {/* <div class={style.Blog_text}> */}
      <div className={style.get_started}>
        <p>Get Started</p>
      </div>
      <div className={style.blog_title}>
        <p>
        Create your own plugin for Zuri Chat
        </p>
      </div>
      <div className={style.Author}>
        <p>
          <b>Author:</b> Umar Faruk Abdullahi
        </p>
        <p className={style.aut}>
          <b>Illustration:</b> Swift
        </p>
        <p className={style.aut}>
          <b>Date:</b> 02 Oct 2021{' '}
        </p>
      </div>
      <div className={style.blogimage}>
        <img src={pluginImage} alt="" />
      </div>

      <div className={style.reader}>
        <div className={style.read_minutes}>
          <p>
            <img src={Clock} alt="" className={style.clock} />
            <span>20 Mins Read</span>
          </p>
        </div>
        <div className={style.blog_links}>
          <p>
            <img src={link} alt="" className={style.clock} />
          </p>
          <p>
            <p>
              <UilFacebookF className={style.clock} />
            </p>
          </p>
          <p>
            <UilTwitter className={style.clock} />
          </p>
          <p>
            <UilLinkedinAlt className={style.clock} />
          </p>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.Blog_article_text}>
        <h3>ZURI CHAT</h3>
        <p>Do you use slack? Well, we’re building a better version of it. <a href="https://zuri.chat">Zuri Chat</a> is a fully operational productivity application just like Slack but more. It is currently in development by interns of the HNG/Zuri internship. It is a highly scalable and efficient platform powered by its vast number of plugins including music, chess, goals and much more. And you can easily build a plugin for Zuri Chat too. But before we get to that, let’s understand the architecture of zuri chat and the way it works.</p>
        <h3>The Architecture of Zuri Chat</h3>
        <p>It’s comprised of three components – the core, the main app and the plugins. Each of these components communicates with the other components to exchange data and provide functionality. We’ll discuss each of them briefly below. The figure below shows a high level overview of the zuri chat architecture.</p>
        <img src={archImage} alt=""></img>
        <ol>
            <li><p><strong>Zuri Core:</strong> This is the core underlying backend system for zuri chat. It is written in the fast and efficient Go programming language. Go was an excellent choice due to it’s compiled nature, scalability and native concurrency support. This component interacts with the database and provides endpoints to enable read/write of data to and from the database. All database access is through the zuri core endpoints. Core features such as authentication, organization management, plugins management and messaging are all implemented in zuri core. Your new plugin will use endpoints provided by this component as you’ll see later. The API documentation is <a href="https://api.zuri.chat/docs">here</a> for your reference</p></li>
            <li><p><strong>Zuri Main:</strong> When you navigate to <a href="https://zuri.chat">zuri.chat</a>, this is what you see. Zuri main is the web application that provides the core functionalities of the app as well as the crucial role of hosting all plugins. It is a full app with both frontend and backend. The frontend is in React and the backend is in Node.js. Your plugin is going to live here.</p></li>
            <li><p><strong>Plugins:</strong> These are the distinctive parts of zuri chat. A plugin is a standalone application that can be hosted on zuri chat. Imagine you want people to buy office equipment through zuri chat, you build an ecommerce plugin for that purpose with a full-fledged frontend and backend. Then, your plugin is hosted on the zuri main web application. This modular design makes zuri chat limitless as new plugins can easily be added to it</p></li>
        </ol>
        <h3>Building your plugin for Zuri Chat</h3>
        <ol>
            <li><p>Decide on which stack to use: You can use any tech stack to build a plugin for zuri chat. Although React and Node is recommended because of Javascript integration, most tech stacks will also work.</p></li>
            <li><p>Build the plugin: Here, you build your application as you would any web application but ensuring that your application’s backend communicates with the core by using the endpoints provided. The core documentation <a href="https://api.zuri.chat/docs">here</a> is indispensable. This <a href="https://github.com/zurichat/zc_plugin_chessboard">plugin</a> provides an excellent example on how to tackle the issue (uses React and Node). You’ll need to use the <a href="https://api.zuri.chat/docs/plugin.html">plugin endpoint</a> to register your plugin in zuri chat for it to be available in the marketplace.</p></li>
            <li><p>Convert it into an SPA: Since your application will be hosted on zuri main which is also another frontend application and many frameworks will have to coexist harmoniously, there is a need to use a system to isolate separate plugins. We used the single-spa architecture to achieve this. Check the <a href="https://single-spa.js.org/">official single-spa website</a> for documentation.</p></li>
            <li><p>Get a subdomain to host</p></li>
            <li><p>Congratulations 🎉</p></li>
        </ol>
      </div>
      {/* </div> */}
    </>
  )
}

export default container
