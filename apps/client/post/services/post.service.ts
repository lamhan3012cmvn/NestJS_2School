import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostService extends BaseService<Post> {
  constructor(
    @InjectModel(Post.modelName)
    private readonly _postModel: ModelType<Post>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _postModel;
  }

  async createPostWithRmc(post: any): Promise<Post> {
    try {
      const obj: any = { ...post };
      const newPostModel = Post.createModel(obj);

      const newPost = await this.create(newPostModel);

      if (newPost) {
        return this.cvtJSON(newPost) as Post;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-PostService');
      return null;
    }
  }
}
