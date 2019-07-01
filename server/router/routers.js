import { Router } from 'express';
import episodeController from '../controllers/episodeController'

const routers = Router();

// Routes to show list of all episodes
routers.get('/episodes', episodeController.allEpisodes);
routers.get('/episodes/:id', episodeController.episodeCharacterList);
routers.post('/episodes/:id', episodeController.addComment);
routers.get('/episodes/:id/comment', episodeController.listComments);
routers.get('/episodes/:id/withcommentcount', episodeController.episodeWithCommentCount);

export default routers;