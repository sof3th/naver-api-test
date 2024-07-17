import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import naverApiSearch from './naverApiSearch';

const BlogSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(null);
  // const [totalResults, setTotalResults] = useState(0);

  // useEffect(() => {
  //   if (data) setTotalResults(data.totalResults);
  // }, [data]);

  const onClick = () => {
    naverApiSearch('blog', keyword).then((response) => {
      setData(response.data);
    });
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div>
      <div style={{ height: '50px', width: '100%', posision: 'absolute' }}>
        <div>
          <input
            type="text"
            name="keyword"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <button onClick={onClick}>불러오기</button>
        </div>
        {/* <div>검색결과 : {totalResults}</div> */}
      </div>
      <hr />
      {data && (
        <table border={1}>
          <thead>
            <th>제목</th>
            <th>블로거</th>
            <th>작성일자</th>
            <th>내용</th>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index}>
                <td>
                  <p>{item.title}</p>
                </td>
                <td>{item.bloggername}</td>
                <td>{item.postdate}</td>
                <td>
                  <Link to={item.link} target="_blank">
                    {item.description}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* <div
        style={{
          height: '800px',
          width: '100%',
          overflow: 'auto',
          position: 'auto',
        }}
      >
        {data &&
          data.articles.map((article, index) => (
            <NewsItem item={article} index={index} />
          ))}
      </div> */}
    </div>
  );
};

export default BlogSearch;
