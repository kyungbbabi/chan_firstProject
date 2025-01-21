import React from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Blog(){

  // const [blogPosts, setBlogPosts] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   // 로그인된 사용자의 토큰 또는 인증 정보를 사용하여 백엔드 API를 호출
  //   const token = '유저의_토큰_또는_인증_정보'; // 로그인 시 발급되는 토큰

  //   // API 호출
  //   axios.get('https://api.example.com/blog', {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // 인증 헤더
  //     },
  //   })
  //   .then((response) => {
  //     // API 응답 데이터를 상태에 저장
  //     setBlogPosts(response.data);
  //   })
  //   .catch((error) => {
  //     console.error('블로그 글을 가져오는 중 에러 발생:', error);
  //   });
  // }, []);

  const handelClickBlogDetail = () => {
    navigate("/blogdetail");
  };

  const blogPosts = [
    {
      id: 1,
      title: "React 컴포넌트 설계하기",
      summary: "효율적인 React 컴포넌트 설계 방법과 최적화 전략을 알아봅니다.",
      thumbnail: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      date: "2024.01.16",
      author: "작성자",
      likes: 42,
      comments: 5
    }
  ];

  return(
    <Box sx={{ marginTop:"5em", marginLeft:"3em", marginRight:"3em" }}>
      <Box sx={{ margin: "0 auto" }}>
        <Grid container spacing={3}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => handelClickBlogDetail(post.id)}>
                <CardMedia component="img" sx={{ objectFit: 'cover' }}  image={post.thumbnail}  alt={post.title}  />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', flex: 1 }} >
                    {post.summary}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.date} · 좋아요 {post.likes} · 댓글 {post.comments}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );

}