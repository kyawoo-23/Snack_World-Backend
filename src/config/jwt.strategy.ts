import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthJwtPayload } from 'src/common/auth.model';
import jwtConfig from 'src/config/jwt.config';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig().secret,
    });
  }

  async validate(payload: AuthJwtPayload) {
    return {
      name: payload.name,
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
