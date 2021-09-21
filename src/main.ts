import { weaverInit } from '@wvr/elements';
import { TamuLibModule } from './app/app.module';
import { environment } from './environments/environment';

weaverInit(TamuLibModule, environment);
