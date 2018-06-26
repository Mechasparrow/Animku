
export class Waifu {

  private waifu_link_endpoint:string = "https://mywaifulist.moe/waifu/";

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

  public generateWaifuLink() {

    return this.waifu_link_endpoint + this.slug;

  }


}
