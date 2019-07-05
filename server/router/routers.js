import { Router } from 'express';
import episodeController from '../controllers/episodeController'

const routers = Router();

// Routes to show list of all episodes
routers.get('/episodes', episodeController.allEpisodes);
routers.get('/episodes/:id/characters', episodeController.episodeCharacterList);
routers.post('/episodes/:id/addcomment', episodeController.addComment);
routers.get('/episodes/:id/showcomments', episodeController.listComments);
routers.get('/episodes/:id/episodecommentcount', episodeController.episodeWithCommentCount);

export default routers;