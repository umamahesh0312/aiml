import express from"express"
import bodyParser from "body-parser"
const port=4000;
const app=express();
var lId=3;
let posts = [
  {
    id: 1,
    title: "consequences under the table",
    content:
     "if you work against the table rules the consequences that you need face are too tough for you and your family and friend as there will be an open contract",
    author: "Mahesh",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "LOve story",
    content:
      "students are often confused with love i dont know what would be the reason behind. my friend ganesh has 4 girlfriend probably priya the most and jaya too",
      author:
      "umamahesh the don",
      date:"2023-08-01T10:00:00Z"
  },
  {
    id: 3,
    title: "Living legend priya ganesh",
    content:
    "priya ganesh aliyas lakinsani ganesh wants marry achutha and and lilly",
    author:
    "priya ganesh",
    date:"2023-08-01T10:00:00Z"
      
  },
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/posts",(req,res)=>{
  console.log(posts)
  res.json(posts)
})
app.get("/posts/:id",(req,res)=>{
  const post=posts.find((p)=>{p.id===req.params.id});
  if(!post){
    res.sendStatus(404).json({message:"no id eith that"})
  }
  res.json(post)
})
app.post("/posts",(req,res)=>{
  const post={
    id:lId+1,
    title:req.body.title,
    content:req.body.content,
    author:req.body.author,
    date:new date()
    }
    lId=lId+1;
    posts.push(post)
    res.json(post)
})
app.patch("/posts/:id",(req,res)=>{
  const post=posts.find((p)=>{
    p.id===req.params.id;
  })
  if(req.body.title)post.title=req.body.title;
  if(req.body.content)post.content=req.body.content;
  if(req.body.auhtor)post.author=req.body.author;
  res.json(post)
})
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
});
app.listen(port,()=>{
  console.log(`this is working on port no:${port}`)
})