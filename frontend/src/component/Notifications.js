import { Avatar, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const Notifications = ({open, onClose}) => {

  const notifications = [
    {
      id: 1,
      type: 'comment',
      content: '블로그 게시글에 새로운 댓글이 달렸습니다.',
      time: '방금 전'
    },
    {
      id: 2,
      type: 'portfolio',
      content: '포트폴리오에 새로운 댓글이 달렸습니다.',
      time: '1시간 전'
    }
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>알림</DialogTitle>
      <DialogContent>
        <List>
          {notifications.map((notification) => (
            <ListItem key={notification.id}>
              <ListItemAvatar>
                <Avatar>
                  {notification.type === 'comment' ? 'C' : 'P'}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={notification.content} secondary={notification.time}/>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );

};

export default Notifications;