import fetch from 'node-fetch';
import Comment from '../model/comments';
import ip from 'ip';


class episodeController {
    static allEpisodes(req, res){
        const api = 'https://rickandmortyapi.com/api/episode/';
        fetch(api).then((response) => response.json())
        .then(({ results }) => {
            // const [result] = results;
            const episodeNames = results.map(result=>result.name);
            res.json(episodeNames);
        });
    }

    static episodeCharacterList(req, res){
        const api = 'https://rickandmortyapi.com/api/episode/';
        const {id} = req.params;
        const intId = parseInt(req.params.id);
        fetch(api).then((response) => response.json())
        .then(({ results }) => {
            // const [result] = results;
            const episodeId= results.map(result=>result.id);
            const i  = episodeId;
            if (episodeId.indexOf(intId) > -1) {
               const characterapi = `https://rickandmortyapi.com/api/episode/${id}`;
               fetch(characterapi).then((response) => response.json())
               .then(({name, characters}) => {
                res.json({name, characters});
                 });
            } else {
                res.json({status:404, Error: "Episode was not found"});
            }

        });


    }
    static addComment(req, res){
        const newComment = new Comment({
            episode: req.params.id,
            comment: req.body.comment,
            ipaddress: ip.address(),
        });
        newComment.save()
        .then(comment => res.json(comment))
        .catch(err => console.log(err));
        
    }
    static listComments(req, res){
        Comment.find({episode: req.params.id})
        .then(comments =>{
            res.json({comments});
        })
    }
    static episodeWithCommentCount(req, res){
        const {id} = req.params;
        const api = `https://rickandmortyapi.com/api/episode/${id}`;
        fetch(api).then((response) => response.json())
        .then(({name, characters }) => {
            Comment.find({episode: 13}).countDocuments()
            .then(comment =>{
                
                res.json({name,comment, characters});             
            });
        });

        
    }
};

export default episodeController;