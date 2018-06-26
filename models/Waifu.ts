
export class Waifu {

  static waifu_link_endpoint:string = "https://mywaifulist.moe/waifu/";

  public image_url:string;
  public name:string;
  public description:string;
  public slug:string;

  constructor(name:string, description:string, image_url:string, slug:string) {

    this.name = name;
    this.description = description;
    this.image_url = image_url;
    this.slug = slug;

  }

  public generateWaifuLink(): string {

    var waifu_link:string = Waifu.waifu_link_endpoint + this.slug;
    return waifu_link;

  }

  static generateWaifuOffJson(waifu_json:any): Waifu {

    let waifu = Object.create(Waifu.prototype);
    return Object.assign(waifu, waifu_json);

  }

  static generateWaifuOffJsonString(waifu_json_string:string): Waifu {
    var waifu_json = JSON.parse(waifu_json_string);
    return Waifu.generateWaifuOffJson(waifu_json);
  }

}
