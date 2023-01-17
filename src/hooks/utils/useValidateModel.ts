import { message } from 'antd';

export default function useValidateModel() {
  const isName = (value: string, error: string) => {
    const t = value.trim();
    if (t.length < 1) {
      message.error(error);
      return false;
    }

    return true;
  };

  const isEmail = (value: string) => {
    const t = value.trim();
    const reg =
      /^[A-Za-z0-9!?#$%^&*()\-_+\\\/.,:;"'{}\[\]<>~]+@[a-zA-Z0-9_-]+(\.[A-Za-z0-9!_#^&*-.]+)+$/;
    if (t.length < 1) {
      message.error('メールアドレスを入力してください');
      return false;
    }
    if (t.length < 5 || t.length > 60 || !reg.test(t)) {
      message.error('有効なメールアドレスを入力してください');
      return false;
    }
    return true;
  };

  const isPassword = (value: string) => {
    const t = value.trim();

    const reg =
      /(?=.*[A-Za-z])[A-Za-z0-9!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~]{8,30}/;
    const reg2 = /(?=.*\d)[A-Za-z0-9!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~]{8,30}/;
    if (t.length < 1) {
      message.error('パスワードを入力してください');
      return false;
    }
    if (t.length < 8 || t.length > 30) {
      message.error('8~30文字で入力してください');
      return false;
    }
    if (!reg.test(t)) {
      message.error('パスワードに英文字が必須です');
      return false;
    }
    if (!reg2.test(t)) {
      message.error('パスワードに数字が必須です');
      return false;
    }
    return true;
  };

  const isCompliantPassword = (p1: string, p2: string, p3: string) => {
    if (!isPassword(p1) || !isPassword(p2) || !isPassword(p3)) return false;
    if (p2 !== p3) {
      message.error('変更後のパスワードは一致していません');
      return false;
    }
    if (p1 === p2 && p1 === p3) {
      message.error('パスワードの変更はありません');
      return false;
    }
    return true;
  };

  const isCompliantTwoPassword = (p1: string, p2: string) => {
    if (!isPassword(p1) || !isPassword(p2)) return false;
    if (p1 !== p2) {
      message.error('変更後のパスワードは一致していません');
      return false;
    }

    return true;
  };

  return {
    isName,
    isEmail,
    isPassword,
    isCompliantPassword,
    isCompliantTwoPassword,
  };
}
