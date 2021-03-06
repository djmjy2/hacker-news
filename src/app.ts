import Router from './core/router';
import { NewsDetailView, NewsFeedView }from './page';
import { Store } from './store';

const store = new Store();

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root', store);
const newsDetailView = new NewsDetailView('root', store);

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route(); //최초 실행시엔 해시체인지가 발생하지 않으므로 route를 수동동작
