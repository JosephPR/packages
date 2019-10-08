import React from 'react';
import { List, Avatar } from 'antd';
import { Layout} from 'antd';

const { Content} = Layout;

const data = [
  {
    title: 'Reillys',
    image: 'https://media.giphy.com/media/ifes1N1VnPor27uOpo/giphy.gif',
    site:  'https://reillys.herokuapp.com/'  },
  {
    title: 'Wine Cellar',
    image: 'https://media.giphy.com/media/cLlKIC9tmJAmuanEN4/200.webp',
    site:  'https://github.com/JosephPR/wine_app'  },
  {
    title: 'Fun Zone',
    image: 'https://media.giphy.com/media/dvHen6RxKsf804snfo/200.webp',
    site:  'https://react-funzone.herokuapp.com/'  },
  {
    title: 'Joes Blog',
    image: 'https://media.giphy.com/media/XB4QdjIrTDl6EfTQUo/giphy.gif',
    site:  'https://hungry-engelbart-904bfc.netlify.com/'
   },

];

export default function Projects () {
  return(
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <List
          className='list'
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta

                avatar={<Avatar src={item.image} />}
                title={<a href={item.site}>{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </Content>

    </Layout>
  )
}
