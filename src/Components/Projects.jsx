import React from 'react';
import { List } from 'antd';
import { Layout} from 'antd';

const { Content} = Layout;

const data = [
  {
    title: 'JobEye',
    image: 'https://media.giphy.com/media/ZD26dN63d54bs1729Q/giphy.gif',
    site:  'https://github.com/JosephPR/job-search',
    description: `Built with MongoDB, Node, React and TailwindCSS. Jobeye is meant to help anyone on the journey of seearching for a Job. It will keep track of all jobs that have been applied for. Updating the status of your applications is a
      breeze, and login will keep all of you information secure with to use of JWT web tokens and bcrypt.`
  },
  {
    title: 'Reillys',
    image: 'https://media.giphy.com/media/ifes1N1VnPor27uOpo/giphy.gif',
    site:  'https://reillys.herokuapp.com/',
    description: `Built with React/Redux.Reilly's is a fully function e-commerce clothing store that has
     easy signup/signin with google through firebase and Stripe API payment integration.`
  },
  {
    title: 'Jumpman',
    image: 'https://media.giphy.com/media/h4N5oppT0Bypl4JHyX/giphy.gif',
    site:  'https://josephpr.github.io/stargame/',
    description: `Phaser3 application including gravity physics, sprite creation and game design.`
  },
  {
    title: 'Wine Cellar',
    image: 'https://media.giphy.com/media/cLlKIC9tmJAmuanEN4/200.webp',
    site:  'https://github.com/JosephPR/wine_app',
    description: `This application was built with Ruby on Rails.
    WineCellar is a great way to learn more about wine.
     You can store tasting notes on particular varietals and categorize all of the different grapes that you come across.`
  },
  {
    title: 'Fun Zone',
    image: 'https://media.giphy.com/media/dvHen6RxKsf804snfo/200.webp',
    site:  'https://react-funzone.herokuapp.com/',
    description: 'Built with React. Here we have a collection of free apis from around the internet. latest movie data, rick and morty characters, Colorado breweries and much more.'
  },
  {
    title: 'Joes Blog',
    image: 'https://media.giphy.com/media/XB4QdjIrTDl6EfTQUo/giphy.gif',
    site:  'https://hungry-engelbart-904bfc.netlify.com/',
    description: 'Built with Gatsby. A collection of Blogs from my time at the flatiron school.'
   },
  {
    title: 'Are we there yet?',
    image: 'map.png',
    site:  'https://github.com/JosephPR/ski-resorts-colorado',
    description: 'Built with google maps API. A map of ski resorts in Colorado and Utah, can specify your seach and can tell the distance from any place on the map to any ski resort you chose.'
   },


];

export default function Projects () {
  return(
    <Layout className="layout">
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <List
          className='list'
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
            {
                      <img
                        width={652}
                        alt="logo"
                        src={item.image}
                        className='img'
                      />
                    }
              <List.Item.Meta

                title={<a className="project-title" href={item.site}>{item.title}</a>}
                description={item.description}

              />
            </List.Item>
          )}
        />
      </Content>

    </Layout>
  )
}
