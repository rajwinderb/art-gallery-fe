import { ISearchedArtwork } from "./Interfaces";
import { reformatToAddArtwork } from "./reformatToAddArtwork";

const searchResults: ISearchedArtwork[] = [
  {
    artistDisplayBio: "Dutch, Zundert 1853–1890 Auvers-sur-Oise",
    artistDisplayName: "Vincent van Gogh",
    artistGender: "",
    artistPrefix: "",
    classification: "Paintings",
    country: "",
    culture: "",
    department: "European Paintings",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Oil on canvas",
    objectDate: "1887",
    objectID: 436524,
    objectName: "Painting",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/ep/original/DP229743.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/ep/web-large/DP229743.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300015638",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q170571",
        term: "Still Life",
      },
    ],
    title: "Sunflowers",
  },
  {
    artistDisplayBio: "French, Paris 1846–1897 Paris",
    artistDisplayName: "Henri-Charles Guérard",
    artistGender: "",
    artistPrefix: "",
    classification: "Drawings",
    country: "",
    culture: "",
    department: "Drawings and Prints",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium:
      "Pen and black ink over black chalk or graphite, gouache and gold leaf on prepared (stiffened) patterned silk",
    objectDate: "ca. 1885–90",
    objectID: 705155,
    objectName: "Drawing",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/dp/original/DP860374.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/dp/web-large/DP860374.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300258857",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q193220",
        term: "Fans",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300265960",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q146",
        term: "Cats",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title: "Fan Design with Cats and Sunflowers",
  },
  {
    artistDisplayBio: "American, Union Bridge, Maryland 1825–1874 Rome",
    artistDisplayName: "William Henry Rinehart",
    artistGender: "",
    artistPrefix: "",
    classification: "",
    country: "",
    culture: "American",
    department: "The American Wing",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Marble",
    objectDate: "1869–70; carved 1872",
    objectID: 11922,
    objectName: "Sculpture",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/ad/original/DT218366.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/ad/web-large/DT218366.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300189568",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q40446",
        term: "Female Nudes",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title: "Clytie",
  },
  {
    artistDisplayBio: "Italian, Moncalvo 1596–1676 Moncalvo",
    artistDisplayName: "Orsola Maddalena Caccia",
    artistGender: "Female",
    artistPrefix: "",
    classification: "Paintings",
    country: "",
    culture: "",
    department: "European Paintings",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Oil on canvas",
    objectDate: "ca. 1635",
    objectID: 816522,
    objectName: "Painting",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/ep/original/DP-19714-001.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/ep/web-large/DP-19714-001.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300132399",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q506",
        term: "Flowers",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300132254",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q191851",
        term: "Vases",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300266272",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q13202263",
        term: "Peaches",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300379705",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q30345409",
        term: "Tulips",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300015638",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q170571",
        term: "Still Life",
      },
    ],
    title: "Flowers in a Grotesque Vase",
  },
  {
    artistDisplayBio: "",
    artistDisplayName: "",
    artistGender: "",
    artistPrefix: "",
    classification: "",
    country: "United States",
    culture: "American",
    department: "The American Wing",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Painted white oak, yellow pine",
    objectDate: "1705",
    objectID: 2032,
    objectName: "Chest with drawer",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/ad/original/85I_ACF3100R5.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/ad/web-large/85I_ACF3100R5.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300132399",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q506",
        term: "Flowers",
      },
    ],
    title: "Chest with drawer",
  },
  {
    artistDisplayBio: "French, born Nice, active Paris ca. 1890–1900",
    artistDisplayName: "Emile Hurtré",
    artistGender: "",
    artistPrefix: "",
    classification: "Drawings",
    country: "",
    culture: "",
    department: "Drawings and Prints",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Pen and black, blue, and metallic ink, watercolor, over graphite",
    objectDate: "1896–98",
    objectID: 343052,
    objectName: "Drawing Ornament & Architecture",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/dp/original/DP811934.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/dp/web-large/DP811934.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300254555",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q25365",
        term: "Cranes",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300250082",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q201251",
        term: "Peacocks",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title:
      "Design for a Wall Decoration with Peacock, Cranes, and Sunflowers for the Restaurant in Hotel Langham (Paris)",
  },
  {
    artistDisplayBio: "1872–1889",
    artistDisplayName: "Chelsea Keramic Art Works",
    artistGender: "",
    artistPrefix: "",
    classification: "",
    country: "United States",
    culture: "American",
    department: "The American Wing",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Earthenware",
    objectDate: "ca. 1878–82",
    objectID: 20141,
    objectName: "Plaque",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/ad/original/L.2009.22.35.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/ad/web-large/L.2009.22.35.jpg",
    tags: null,
    title: "Plaque",
  },
  {
    artistDisplayBio: "",
    artistDisplayName: "F. Gadesden",
    artistGender: "",
    artistPrefix: "",
    classification: "Ceramics-Pottery",
    country: "",
    culture: "",
    department: "European Sculpture and Decorative Arts",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Earthenware",
    objectDate: "1876",
    objectID: 208554,
    objectName: "Charger",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/es/original/DT4036.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/es/web-large/DT4036.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300417320",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q11946202",
        term: "Butterflies",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title: "Charger",
  },
  {
    artistDisplayBio: "ca. 1675–1725",
    artistDisplayName: "Peter Blin",
    artistGender: "",
    artistPrefix: "Workshop of",
    classification: "",
    country: "United States",
    culture: "American",
    department: "The American Wing",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "White oak, yellow pine, white cedar",
    objectDate: "1675–1700",
    objectID: 2019,
    objectName: "Chest with drawers",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/ad/original/85I_ACF3093R6.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/ad/web-large/85I_ACF3093R6.jpg",
    tags: null,
    title: "Chest with drawers",
  },
  {
    artistDisplayBio: "Bohemian, Prague 1607–1677 London",
    artistDisplayName: "Wenceslaus Hollar",
    artistGender: "",
    artistPrefix: "",
    classification: "Prints",
    country: "",
    culture: "",
    department: "Drawings and Prints",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Etching; third state of three",
    objectDate: "1644",
    objectID: 360837,
    objectName: "Print",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/dp/original/DP823393.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/dp/web-large/DP823393.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300025928",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q8441",
        term: "Men",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300015637",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q134307",
        term: "Portraits",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title: "Sir Anthony Van Dyck with a Sunflower",
  },
  {
    artistDisplayBio: "French, Pont-à-Marc 1746–1816 Paris",
    artistDisplayName: "Philippe Laurent Roland",
    artistGender: "",
    artistPrefix: "",
    classification: "Sculpture",
    country: "",
    culture: "",
    department: "European Sculpture and Decorative Arts",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Marble medallion, gilt and marbleized wood frame",
    objectDate: "1787",
    objectID: 207869,
    objectName: "Portrait roundel",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/es/original/DT6487.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/es/web-large/DT6487.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/ulan/500122357",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q7732",
        term: "Louis XVI",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300025928",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q8441",
        term: "Men",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300025481",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q12097",
        term: "Kings",
      },
    ],
    title: "Louis XVI",
  },
  {
    artistDisplayBio: "American",
    artistDisplayName: "Unidentified Edgefield District potter",
    artistGender: "",
    artistPrefix: "",
    classification: "",
    country: "United States",
    culture: "American",
    department: "The American Wing",
    dynasty: "",
    isHighlight: true,
    linkResource: "",
    medium: "Alkaline glazed stoneware with kaolin inserts",
    objectDate: "19th century",
    objectID: 761604,
    objectName: "Face Vessel",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/ad/original/DP-15482-003.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/ad/web-large/DP-15482-003.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300251798",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q37017",
        term: "Faces",
      },
    ],
    title: "Face Harvest Jug",
  },
  {
    artistDisplayBio: "British, 1745–1784, Red Anchor Period, ca. 1753–58",
    artistDisplayName: "Chelsea Porcelain Manufactory",
    artistGender: "",
    artistPrefix: "",
    classification: "Ceramics-Porcelain",
    country: "",
    culture: "",
    department: "European Sculpture and Decorative Arts",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Soft-paste porcelain",
    objectDate: "ca. 1755",
    objectID: 707887,
    objectName: "Dish",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/es/original/DP-1687-037.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/es/web-large/DP-1687-037.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300417320",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q11946202",
        term: "Butterflies",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title: "Botanical dish with white sunflower",
  },
  {
    artistDisplayBio: "",
    artistDisplayName: "Goodwin & Company",
    artistGender: "",
    artistPrefix: "Issued by",
    classification: "Prints",
    country: "",
    culture: "",
    department: "Drawings and Prints",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Commercial color lithograph",
    objectDate: "1890",
    objectID: 400581,
    objectName: "Print",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/dp/original/DP822032.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/dp/web-large/DP822032.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300011892",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q33971",
        term: "Leaves",
      },
    ],
    title:
      "Sunflower (Helianthus annuus), from the Flowers series for Old Judge Cigarettes",
  },
  {
    artistDisplayBio: "",
    artistDisplayName: "American Tobacco Company",
    artistGender: "",
    artistPrefix: "Issued by Duke Cigarette branch of the",
    classification: "Prints",
    country: "",
    culture: "",
    department: "Drawings and Prints",
    dynasty: "",
    isHighlight: false,
    linkResource: "",
    medium: "Commercial color lithograph",
    objectDate: "1892",
    objectID: 423400,
    objectName: "Print",
    period: "",
    primaryImage:
      "https://images.metmuseum.org/CRDImages/dp/original/DPB882889.jpg",
    primaryImageSmall:
      "https://images.metmuseum.org/CRDImages/dp/web-large/DPB882889.jpg",
    tags: [
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300025943",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q467",
        term: "Women",
      },
      {
        AAT_URL: "http://vocab.getty.edu/page/aat/300404749",
        Wikidata_URL: "https://www.wikidata.org/wiki/Q171497",
        term: "Sunflowers",
      },
    ],
    title:
      "Sunflower: Haughtiness, from the series Floral Beauties and Language of Flowers (N75) for Duke brand cigarettes",
  },
];
const idType = ["number", "undefined"];
const primaryImageType = ["string", "undefined"];
const primaryImageSmallType = ["string", "undefined"];
const departmentType = ["string"];
const objectNameType = ["string", "undefined"];
const titleType = ["string", "null"];
const cultureType = ["string", "null"];
const periodType = ["string", "null"];
const dynastyType = ["string", "null"];
const artistPrefixType = ["string", "null", "undefined"];
const artistDisplayNameType = ["string", "undefined"];
const artistDisplayBioType = ["string", "undefined"];
const artistGenderType = ["string", "null", "undefined"];
const objectDateType = ["string", "null", "undefined"];
const mediumType = ["string", "null"];
const countryType = ["string", "null"];
const classificationType = ["string", "null"];
const linkResourceType = ["string", "null", "undefined"];
const featuredType = "boolean";
const isHighlightType = ["boolean", "undefined"];
const tagsType = ["string", "undefined"];

test("check if the types of the return are correct for all search results", () => {
  for (const result of searchResults) {
    const reformatted = reformatToAddArtwork(result);
    expect(idType).toContain(typeof reformatted.id);
    expect(primaryImageType).toContain(typeof reformatted.primaryImage);
    expect(primaryImageSmallType).toContain(
      typeof reformatted.primaryImageSmall
    );
    expect(departmentType).toContain(typeof reformatted.department);
    expect(objectNameType).toContain(typeof reformatted.objectName);
    expect(titleType).toContain(typeof reformatted.title);
    expect(cultureType).toContain(typeof reformatted.culture);
    expect(periodType).toContain(typeof reformatted.period);
    expect(dynastyType).toContain(typeof reformatted.dynasty);
    expect(artistPrefixType).toContain(typeof reformatted.artistPrefix);
    expect(artistDisplayNameType).toContain(
      typeof reformatted.artistDisplayName
    );
    expect(artistDisplayBioType).toContain(typeof reformatted.artistDisplayBio);
    expect(artistGenderType).toContain(typeof reformatted.artistGender);
    expect(objectDateType).toContain(typeof reformatted.objectDate);
    expect(mediumType).toContain(typeof reformatted.medium);
    expect(countryType).toContain(typeof reformatted.country);
    expect(classificationType).toContain(typeof reformatted.classification);
    expect(linkResourceType).toContain(typeof reformatted.linkResource);
    expect(featuredType).toContain(typeof reformatted.featured);
    expect(isHighlightType).toContain(typeof reformatted.isHighlight);
    if (reformatted.tags) {
      for (const tag of reformatted.tags) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(tagsType).toContain(typeof tag);
      }
    }
  }
});
