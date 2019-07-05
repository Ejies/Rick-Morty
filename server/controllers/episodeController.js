import fetch from 'node-fetch';
import Comment from '../model/comments';
import pool from '../model/database';
import { addComment } from '../model/queries';
import ip from 'ip';
import moment from 'moment'


class episodeController {
    static allEpisodes(req, res){
        const api = 'https://rickandmortyapi.com/api/episode/';
        fetch(api).then((response) => response.json())
        .then(({ results }) => {
           
            return res.json(results)
            
        });
    }

    static episodeCharacterList(req, res){
        const api = 'https://rickandmortyapi.com/api/episode/';
        const {id} = req.params;
        const intId = parseInt(req.params.id);
        fetch(api).then((response) => response.json())
        .then(({ results }) => {
            const episodeId= results.map(result=>result.id);
            const i  = episodeId;
            if (episodeId.indexOf(intId) > -1) {
               const characterapi = `https://rickandmortyapi.com/api/episode/${id}`;
               fetch(characterapi).then((response) => response.json())
               .then(({name, characters}) => {
                var i;
                for (i = 0; i < characters.length; i++) { 

                    const array = characters[i];
                    fetch(characters[i]).then((response) => response.json(characters));
                    
                        
                    
                    
                }
                   
                 });
            } else {
                res.json({status:404, Error: "Episode was not found"});
            }

        });


    }
    static addComment(req, res){
        const api = 'https://rickandmortyapi.com/api/episode/';
        const { id } = req.params;
        const intId = parseInt(req.params.id);
        fetch(api).then((response) => response.json())
        .then(({ results }) => {
            const episodeId= results.map(result=>result.id);
           
            if (episodeId.indexOf(intId) > -1) {
                const { comment } = req.body;
                const ipaddress = ip.address();
                const CommentDate =  moment().format();
                
                pool.query('INSERT INTO comments (episode, comment, ipaddress,date) VALUES ($1, $2, $3, $4)', [id, comment,ipaddress,CommentDate], (error, results) => {
                    if (error) {
                        throw error
                    }
                    res.status(201).send(`Comment Successful Added to EpisodeID:${id}`)
                })
            } else {
                res.json({status:404, Error: `Can not post comment to non-existing Episode, EpisodeID: ${id}`});
            }

        });
        
    }
    static listComments(req, res){
        const {id} = req.params;
        const api = `https://rickandmortyapi.com/api/episode/${id}`;
        fetch(api).then((response) => response.json())
        .then(({name, characters }) => {
            pool.query('SELECT * FROM comments where episode = $1', [id], function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.status(200).send(result.rows);
            });
           
        });
    }
    static episodeWithCommentCount(req, res){
        const {id} = req.params;
        const api = `https://rickandmortyapi.com/api/episode/${id}`;
        fetch(api).then((response) => response.json())
        .then(({name, characters }) => {
            pool.query('SELECT * FROM comments where episode = $1', [id], function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.status(200).json(`EpisodeID: ${id} has `+result.rows.length);
            });
           
        });

        
    }
};

export default episodeController;