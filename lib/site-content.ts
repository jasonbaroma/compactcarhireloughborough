export type Vehicle = {
  title: string
  body: string
  image: string
  alt: string
}

export type Faq = {
  question: string
  answer: string
}

export type WhyChooseItem = {
  title: string
  body: string
}

export type LocalRelevanceBlock = {
  title: string
  body: string
}

export type ServicePageContent = {
  metadata: {
    title: string
    description: string
  }
  currentLocationName?: string
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel?: string
  inventorySectionId?: string
  mainServiceKicker?: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: Vehicle[]
  mainVehicleAction: boolean
  whyChooseKicker?: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseItem[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: Vehicle[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker?: string
  serviceAreasTitle?: string
  serviceAreasDescription?: string
  localRelevanceKicker?: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalRelevanceBlock[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker?: string
  faqTitle?: string
  faqs: Faq[]
}

type VehicleText = {
  body: string
  alt: string
}

type WhyChooseText = {
  title: string
  body: string
}

type LocalBlockText = {
  title: string
  body: string
}

type FaqText = {
  question: string
  answer: string
}

type ContentTokenSet = {
  metadata: {
    title: string
    description: string
  }
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel: string
  mainServiceKicker: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: VehicleText[]
  whyChooseKicker: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseText[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: VehicleText[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker: string
  serviceAreasTitle: string
  serviceAreasDescription: string
  localRelevanceKicker: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalBlockText[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker: string
  faqTitle: string
  faqs: FaqText[]
}

export type ServiceSlug =
  | "compact-car"
  | "van-hire"
  | "truck-hire"
  | "minibus-hire"

function isTemplateToken(value: string) {
  return value.startsWith("{{") && value.endsWith("}}")
}

const compactCarMainImages = [
  "/compact-car/Fiat500.png",
  "/compact-car/Hyundai-i10Auto.png",
  "/compact-car/VWGolf.png",
  "/compact-car/FocusAuto.png",
] as const

const compactCarAdditionalImages = [
  "/compact-car/FocusEstate.png",
  "/compact-car/Mondeo.png",
  "/compact-car/MondeoAuto.png",
  "/compact-car/MondeoEstate.png",
  "/compact-car/RAV4Auto.png",
  "/compact-car/CClassAuto.png",
  "/compact-car/EClassAuto.png",
  "/compact-car/RangeRover.png",
] as const

const vanMainImages = [
  "/van/CaddyVan.png",
  "/van/FordTransitSWB.png",
  "/van/VWTransporterAutomatic.png",
  "/van/FordTransitMWB.png",
  "/van/FordTransitLWB.png",
  "/van/4MTRSprinter.png",
  "/van/FordLutonBoxTailLift.png",
  "/van/FordTransitDropsideVan.png",
  "/van/3.5TonneTipperTransit.png",
  "/van/RecoveryVanTruck.png",
  "/van/VWCampervan.png",
  "/van/12.5MCherryPicker3.5T.png",
] as const

const minibusMainImages = [
  "/minibus/VauxhallZafira5plus2.png",
  "/minibus/Galaxy7SeaterManual.png",
  "/minibus/Galaxy7SeaterAutomatic.png",
  "/minibus/9SeaterManual.png",
  "/minibus/9SeaterAutomatic.png",
  "/minibus/FordMinibus12Seater.png",
  "/minibus/FordMinibus15Seater.png",
  "/minibus/FordMinibusLITE 17Seater(no D1).png",
  "/minibus/FordMinibus17Seater.png",
] as const

const truckMainImages = [
  "/truck/FordLuton3.5TonTailBoxLiftTruck.png",
  "/truck/3.5TonneTipperTransitTruck.png",
  "/truck/3.5TonneRecoveryTruck.png",
  "/truck/7.5TonneBoxTruckWithTailLift.png",
  "/truck/7.5TonneCurtainSideTruck.png",
  "/truck/7.5TonneDropsideTruck.png",
  "/truck/7.5TonneTipperTruck.png",
  "/truck/7.5TonneSleeperTailLiftTruck.png",
  "/truck/18TonneBoxTruck.png",
  "/truck/18TonneCurtainsideTruck.png",
  "/truck/26TonneCurtainSideTruck.png",
  "/truck/44TonneSleeperTruck.png",
] as const

const compactCarMainNames = [
  "Fiat 500",
  "Hyundai i10 Auto",
  "VW Golf",
  "Focus Auto",
] as const

const compactCarAdditionalNames = [
  "Focus Estate",
  "Mondeo",
  "Mondeo Auto",
  "Mondeo Estate",
  "RAV4 Auto",
  "C Class Auto",
  "E Class Auto",
  "Range Rover",
] as const

const vanMainNames = [
  "Caddy Van",
  "Ford Transit SWB",
  "VW Transporter Automatic",
  "Ford Transit MWB",
  "Ford Transit LWB",
  "4 MTR Sprinter",
  "Ford Luton Box Tail Lift",
  "Ford Transit Dropside Van",
  "3.5 Tonne Tipper Transit",
  "Recovery Van",
  "VW Campervan",
  "12.5M Cherry Picker 3.5T",
] as const

const minibusMainNames = [
  "Vauxhall Zafira 5 + 2",
  "Galaxy 7 Seater Manual",
  "Galaxy 7 Seater Automatic",
  "9 Seater Manual",
  "9 Seater Automatic",
  "Ford Minibus 12 Seater",
  "Ford Minibus 15 Seater",
  "Ford Minibus LITE 17 Seater (no D1)",
  "Ford Minibus 17 Seater",
] as const

const truckMainNames = [
  "Ford Luton 3.5 ton Tail Box Lift Truck",
  "3.5 Tonne Tipper Transit Truck",
  "3.5 Tonne Recovery Truck",
  "7.5 Tonne Box Truck With Tail Lift",
  "7.5 Tonne Curtain Side Truck",
  "7.5 Tonne Dropside Truck",
  "7.5 Tonne Tipper Truck",
  "7.5 Tonne Sleeper Tail Lift Truck",
  "18 Tonne Box Truck",
  "18 Tonne Curtain Side Truck",
  "26 Tonne Curtain Side Truck",
  "44 Tonne Sleeper Truck",
] as const

export const siteConfig = {
  businessName: "Compact Car Hire Loughborough",
  companyTagline: "Practical self-drive hire across Loughborough and the wider Leicestershire and East Midlands routes",
  legalBusinessName: "Compact Car Hire Loughborough",
  locationName: "Loughborough",
  siteUrl: "https://compactcarhireloughborough.co.uk",
  phone: "0203 909 9745",
  displayPhone: "0203 909 9745",
  ui: {
    navLocationsLabel: "Locations",
    navServicesLabel: "Services",
    navCallToBookLabel: "Call to Book",
    navCallShortLabel: "Call",
    bookNowLabel: "Call to Book",
    footerCopyrightLabel: "© 2026 Compact Car Hire Loughborough. All rights reserved.",
  },
} as const

export function getMetadataBase() {
  const rawSiteUrl = siteConfig.siteUrl

  if (isTemplateToken(rawSiteUrl)) {
    return new URL("https://example.com")
  }

  return new URL(rawSiteUrl)
}

export function withCanonicalPath(
  metadata: ServicePageContent["metadata"],
  canonicalPath: string,
) {
  return {
    ...metadata,
    alternates: {
      canonical: canonicalPath,
    },
  }
}

export const serviceNavigation: Array<{
  label: string
  route: string
}> = [
  { label: "Compact Car Hire", route: "/" },
  { label: "Van Hire", route: "/van-hire" },
  { label: "Minibus Hire", route: "/minibus-hire" },
  { label: "Truck Hire", route: "/truck-hire" },
]

function createVehicles(
  names: readonly string[],
  images: readonly string[],
  vehicleText: VehicleText[],
): Vehicle[] {
  return names.map((name, index) => ({
    title: name,
    body: vehicleText[index].body,
    image: images[index],
    alt: vehicleText[index].alt,
  }))
}

function createContentSet(args: {
  tokens: ContentTokenSet
  mainVehicleNames: readonly string[]
  mainVehicleImages: readonly string[]
  inventorySectionId: string
  currentLocationName?: string
  mainVehicleAction?: boolean
  additionalVehicleNames?: readonly string[]
  additionalVehicleImages?: readonly string[]
}): ServicePageContent {
  const {
    tokens,
    mainVehicleNames,
    mainVehicleImages,
    inventorySectionId,
    currentLocationName,
    mainVehicleAction = false,
    additionalVehicleNames,
    additionalVehicleImages,
  } = args

  return {
    metadata: {
      title: tokens.metadata.title,
      description: tokens.metadata.description,
    },
    currentLocationName,
    heroImage: tokens.heroImage,
    heroAlt: tokens.heroAlt,
    heroTitle: tokens.heroTitle,
    heroDescription: tokens.heroDescription,
    heroSecondaryActionLabel: tokens.heroSecondaryActionLabel,
    inventorySectionId,
    mainServiceKicker: tokens.mainServiceKicker,
    mainServiceTitle: tokens.mainServiceTitle,
    mainServiceDescription: tokens.mainServiceDescription,
    mainVehicles: createVehicles(
      mainVehicleNames,
      mainVehicleImages,
      tokens.mainVehicles,
    ),
    mainVehicleAction,
    whyChooseKicker: tokens.whyChooseKicker,
    whyChooseTitle: tokens.whyChooseTitle,
    whyChooseDescription: tokens.whyChooseDescription,
    whyChooseItems: tokens.whyChooseItems,
    additionalServicesKicker: tokens.additionalServicesKicker,
    additionalServicesTitle: tokens.additionalServicesTitle,
    additionalServicesDescription: tokens.additionalServicesDescription,
    additionalVehicles:
      additionalVehicleNames &&
      additionalVehicleImages &&
      tokens.additionalVehicles
        ? createVehicles(
            additionalVehicleNames,
            additionalVehicleImages,
            tokens.additionalVehicles,
          )
        : undefined,
    featureCtaTitle: tokens.featureCtaTitle,
    featureCtaDescription: tokens.featureCtaDescription,
    serviceAreasKicker: tokens.serviceAreasKicker,
    serviceAreasTitle: tokens.serviceAreasTitle,
    serviceAreasDescription: tokens.serviceAreasDescription,
    localRelevanceKicker: tokens.localRelevanceKicker,
    localRelevanceTitle: tokens.localRelevanceTitle,
    localRelevanceDescription: tokens.localRelevanceDescription,
    localRelevanceBlocks: tokens.localRelevanceBlocks,
    bottomCtaTitle: tokens.bottomCtaTitle,
    bottomCtaDescription: tokens.bottomCtaDescription,
    faqKicker: tokens.faqKicker,
    faqTitle: tokens.faqTitle,
    faqs: tokens.faqs,
  }
}

function createCompactMainVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Fiat 500 is ideal for short ${location} trips where easy parking, simple handling and a small footprint matter most.`,
      alt: `Fiat 500 compact hire car for easy local driving in ${location}`,
    },
    {
      body: `The Hyundai i10 Auto suits drivers who want relaxed automatic driving for errands, station collections and everyday travel around ${location}.`,
      alt: `Hyundai i10 automatic compact hire car in ${location}`,
    },
    {
      body: `The VW Golf adds extra comfort and luggage space while keeping the practical feel that works well for mixed local and regional mileage from ${location}.`,
      alt: `Volkswagen Golf hatchback available for hire in ${location}`,
    },
    {
      body: `The Focus Auto is a useful all-rounder when your ${location} journey mixes town driving with longer runs on faster roads.`,
      alt: `Ford Focus automatic available for self-drive hire in ${location}`,
    },
  ]
}

function createCompactAdditionalVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Focus Estate gives ${location} drivers extra boot space without stepping too far away from the feel of a normal everyday car.`,
      alt: `Ford Focus Estate available for practical luggage space in ${location}`,
    },
    {
      body: `The Mondeo is a sensible step up when comfort matters more, especially for longer journeys starting or ending in ${location}.`,
      alt: `Ford Mondeo saloon for longer road journeys from ${location}`,
    },
    {
      body: `The Mondeo Auto suits ${location} customers who want easier traffic driving while keeping the cabin comfort of a larger saloon.`,
      alt: `Ford Mondeo automatic for comfortable self-drive hire in ${location}`,
    },
    {
      body: `The Mondeo Estate works well when ${location} travel needs more luggage room for family visits, airport runs or longer stays away.`,
      alt: `Ford Mondeo Estate with extended luggage room for ${location} hires`,
    },
    {
      body: `The RAV4 Auto is a practical SUV option for ${location} journeys that need extra cabin flexibility and a higher driving position.`,
      alt: `Toyota RAV4 automatic SUV for flexible travel around ${location}`,
    },
    {
      body: `The C Class Auto gives ${location} customers a more refined option for business travel, client meetings and longer personal trips.`,
      alt: `Mercedes C Class automatic for executive car hire in ${location}`,
    },
    {
      body: `The E Class Auto is well suited to longer mileage from ${location} where extra cabin space and motorway comfort make a difference.`,
      alt: `Mercedes E Class automatic executive vehicle hire in ${location}`,
    },
    {
      body: `The Range Rover is there when a ${location} booking needs premium comfort, stronger road presence and more flexible luggage space.`,
      alt: `Range Rover SUV hire for premium travel in ${location}`,
    },
  ]
}

function createNearbyWhyChooseItems(location: string): WhyChooseText[] {
  return [
    {
      title: "Useful compact fleet",
      body: `Our compact line-up suits ${location} travel that calls for easy parking, light everyday driving and sensible motorway comfort.`,
    },
    {
      title: "Manual and automatic options",
      body: `Whether you want a simple city car or an automatic hatchback for ${location} traffic, we keep the choice practical.`,
    },
    {
      title: "Straightforward booking support",
      body: `We focus on helping ${location} customers choose a vehicle that fits the actual trip rather than overcomplicating the booking.`,
    },
    {
      title: "Good fit for mixed routes",
      body: `A compact car is often the most practical option when ${location} driving mixes residential roads, station access and quicker regional links.`,
    },
    {
      title: "Wider fleet available",
      body: `If your ${location} journey needs more than a compact car, we can also help with larger cars, vans, minibuses and trucks.`,
    },
    {
      title: "Built around real local use",
      body: `Our service is shaped around the kind of everyday driving ${location} customers actually need to do.`,
    },
  ]
}

type NearbyLocationProfile = {
  location: string
  heroImage: string
  heroAlt: string
  metadataDescription: string
  heroDescription: string
  serviceDescription: string
  whyChooseDescription: string
  serviceAreasDescription: string
  localRelevanceDescription: string
  localBlocks: LocalBlockText[]
  faqs: FaqText[]
}

function createNearbyLocationTokens(profile: NearbyLocationProfile): ContentTokenSet {
  return {
    metadata: {
      title: `Compact Car Hire ${profile.location} | Self-Drive Small Cars`,
      description: profile.metadataDescription,
    },
    heroImage: profile.heroImage,
    heroAlt: profile.heroAlt,
    heroTitle: `Compact Car Hire in ${profile.location}`,
    heroDescription: profile.heroDescription,
    heroSecondaryActionLabel: "View vehicle options",
    mainServiceKicker: `${profile.location} compact car hire`,
    mainServiceTitle: `Easy self-drive compact car hire in ${profile.location}`,
    mainServiceDescription: profile.serviceDescription,
    mainVehicles: createCompactMainVehicleTexts(profile.location),
    whyChooseKicker: "Why choose us",
    whyChooseTitle: `Why compact car hire works well for ${profile.location} drivers`,
    whyChooseDescription: profile.whyChooseDescription,
    whyChooseItems: createNearbyWhyChooseItems(profile.location),
    additionalServicesKicker: "More vehicle options",
    additionalServicesTitle: `Need more than a compact car in ${profile.location}?`,
    additionalServicesDescription: `Alongside compact car hire in ${profile.location}, we can also help with estates, larger saloons, SUVs and the wider fleet of vans, minibuses and trucks when the journey needs more room.`,
    additionalVehicles: createCompactAdditionalVehicleTexts(profile.location),
    featureCtaTitle: `Check compact car availability in ${profile.location}`,
    featureCtaDescription: `Tell us what sort of ${profile.location} driving you have planned and we will help you line up a practical compact car quickly.`,
    serviceAreasKicker: "Areas we cover",
    serviceAreasTitle: `Vehicle hire for ${profile.location} and nearby routes`,
    serviceAreasDescription: profile.serviceAreasDescription,
    localRelevanceKicker: "Local driving guide",
    localRelevanceTitle: `Why compact car hire makes sense in ${profile.location}`,
    localRelevanceDescription: profile.localRelevanceDescription,
    localRelevanceBlocks: profile.localBlocks,
    bottomCtaTitle: `Book compact car hire in ${profile.location}`,
    bottomCtaDescription: `If you need a small self-drive car in ${profile.location} for local travel, work appointments or a wider regional journey, get in touch and we will help you choose the right vehicle.`,
    faqKicker: `${profile.location} hire FAQs`,
    faqTitle: `Common questions about compact car hire in ${profile.location}`,
    faqs: profile.faqs,
  }
}

        const homepageTokens: ContentTokenSet = {
      metadata: {
        title: "Compact Car Hire Loughborough | Self-Drive Vehicle Hire",
        description: "Compact car hire in Loughborough for town driving, station access and East Midlands travel, with vans, minibuses and trucks also available when you need more room.",
      },
      heroImage: "/images/compactcarhireloughborough-co-uk-homepage-compact-car-fleet.png",
      heroAlt: "Compact hire cars prepared for everyday driving in Loughborough",
      heroTitle: "Compact car hire in Loughborough made practical",
      heroDescription: "Compact car hire in Loughborough for local driving, station pickups, business mileage and wider trips using the A6, A512, A60 and M1 links, backed by a broader self-drive fleet when you need extra space.",
      heroSecondaryActionLabel: "View vehicle options",
      mainServiceKicker: "Compact car hire",
      mainServiceTitle: "Self-drive compact cars for everyday Loughborough journeys",
      mainServiceDescription: `Our Loughborough compact car hire service is built around the sort of journeys people actually make from town. Some bookings stay close to the centre and need a car that remains easy around ordinary parking, campus-side travel and residential streets. Others mix station access near Loughborough station with onward mileage on the A6, A512, A60 or a quick link onto the M1. A compact hatchback usually handles that balance well because it feels manageable locally without becoming tiring on the wider drive.

That makes compact cars a sensible fit for business appointments, temporary replacement transport, family visits and short regional travel from Loughborough. If the plan grows beyond what a small car should reasonably carry, we can also help with larger cars, estates, SUVs and the wider fleet of vans, minibuses and trucks.`,
      mainVehicles: createCompactMainVehicleTexts("Loughborough"),
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical approach to self-drive hire in Loughborough",
      whyChooseDescription: "We keep compact car hire straightforward for Loughborough customers by focusing on useful vehicles, clear support and the sort of routes people are really covering between town driving, station access and bigger East Midlands links.",
      whyChooseItems: [
        { title: "Cars that suit real journeys", body: "Our compact range is chosen around everyday usability, with smaller cars that feel comfortable both in town and on wider A-road mileage." },
        { title: "Straightforward vehicle choice", body: "If you need an easy local hatchback, an automatic or something with a little more luggage room, we keep the choices practical rather than confusing." },
        { title: "Useful local fit", body: "Loughborough bookings often combine town-centre travel, station access, university-side routes and quick links onto the A6, A512, A60 or M1, so the fleet is shaped around that kind of use." },
        { title: "Support beyond compact cars", body: "If the journey changes, we can also help with larger cars, vans, minibuses and trucks without sending you elsewhere." },
        { title: "Clear booking help", body: "The focus is on what the vehicle needs to do in practice, not on vague wording or complicated booking language." },
        { title: "Flexible around changing plans", body: "Replacement transport, mixed local-regional journeys and short-notice bookings are common, and we keep the hire useful around that." },
      ],
      additionalServicesKicker: "Wider fleet options",
      additionalServicesTitle: "More vehicle choice when your Loughborough trip needs extra room",
      additionalServicesDescription: "If a compact hatchback is not the right fit, we can also help with larger cars, estates, SUVs and executive automatics. The wider self-drive fleet also includes vans, minibuses and trucks for bigger transport jobs.",
      additionalVehicles: createCompactAdditionalVehicleTexts("Loughborough"),
      featureCtaTitle: "Looking for the right vehicle in Loughborough?",
      featureCtaDescription: "Tell us what sort of driving you have planned and we will help you choose a compact car or a larger vehicle that makes practical sense.",
      serviceAreasKicker: "Areas we cover",
      serviceAreasTitle: "Vehicle hire around Loughborough and surrounding towns",
      serviceAreasDescription: "We support customers in Loughborough and across nearby Leicestershire, Derbyshire and Nottinghamshire routes, with compact car hire backed by the wider self-drive fleet when extra space is needed.",
      localRelevanceKicker: "Driving in Loughborough",
      localRelevanceTitle: "Why compact car hire works well in Loughborough",
      localRelevanceDescription: `Loughborough is the sort of place where a compact car often feels like the sensible middle ground. Local journeys can involve town-centre turns, campus access, station pickups and ordinary parking, while wider routes quickly open out onto the A6, A512, A60 and M1. A smaller hatchback keeps the local part straightforward without feeling underdone once the booking widens into regional mileage.

That balance is useful for everyday appointments, business travel, family visits and replacement transport. Loughborough station access, retail stops near the centre and practical onward travel towards Leicester, Derby or Nottingham all reward a vehicle that is easy to place, easy to park and still settled enough for the larger road section of the day.`,
      localRelevanceBlocks: [
        {
          title: "A sensible fit for mixed Loughborough journeys",
          body: `Many Loughborough bookings combine local movement with a quick change onto larger roads. A compact hatchback keeps the town-centre part of the trip simple while still being comfortable enough once the route widens towards the A6, A512, A60 or M1.

That matters when the day includes several short stops rather than one long uninterrupted drive. A smaller car takes the pressure out of repeated parking and route changes.`,
        },
        {
          title: "Useful around the station, campus and everyday stops",
          body: `Compact cars work particularly well for station access, business visits, university-side travel and day-to-day appointments around Loughborough. They are easier to slot into ordinary car parks and less awkward in busier local traffic than something larger.

For customers covering replacement transport, that simplicity is often exactly what they want: a clean, manageable vehicle that does not make a normal day harder than it needs to be.`,
        },
        {
          title: "Easy to step up when the plan changes",
          body: `Sometimes a booking starts as a compact-car job but later needs more carrying room or more passenger comfort. That is one reason we keep the wider fleet in view, from estates and SUVs through to vans, minibuses and trucks.

You can start with the right car for a simple Loughborough trip and still have a clear route to something larger if the journey grows.`,
        },
      ],
      bottomCtaTitle: "Book compact car hire in Loughborough with practical support",
      bottomCtaDescription: "If you need a compact car in Loughborough for local driving, business mileage or short regional travel, get in touch and we will help you line up a suitable vehicle.",
      faqKicker: "Common questions",
      faqTitle: "Compact car hire FAQs for Loughborough",
      faqs: [
        { question: "Why choose compact car hire in Loughborough?", answer: "Compact cars make sense in Loughborough because they are easier to park, easy to drive around town and still comfortable enough for A-road and M1 mileage." },
        { question: "Can I arrange compact car hire in Loughborough at short notice?", answer: "Yes, subject to availability. If you need a compact car quickly in Loughborough, call us and we will talk through what is ready for the timing you need." },
        { question: "Do you only offer small cars in Loughborough?", answer: "No. Compact cars are the core offer on this page, but we also provide larger cars, estates, SUVs, vans, minibuses and trucks when the journey needs more room." },
        { question: "What are compact hire cars in Loughborough commonly used for?", answer: "Common uses include station runs, business visits, shopping trips, family travel, temporary replacement transport and short regional journeys." },
        { question: "Are automatic compact cars available in Loughborough?", answer: "Yes, subject to availability. If you prefer an automatic for easier local traffic or more relaxed regional driving, ask us when you book." },
        { question: "What should I tell you when booking in Loughborough?", answer: "The most useful details are the dates, expected route, whether you want manual or automatic driving, and whether there is any chance you will need more space than a compact hatchback." },
      ],
    }

    const vanHireTokens: ContentTokenSet = {
      metadata: {
        title: "Van Hire Loughborough | Practical Vans for Moves, Deliveries and Trade",
        description: "Van hire in Loughborough for house moves, deliveries, trade jobs and specialist transport, with compact vans, Transits, Lutons and more available.",
      },
      heroImage: "/images/compactcarhireloughborough-co-uk-van-hire-main-fleet.png",
      heroAlt: "Modern self-drive rental van ready for loading in Loughborough",
      heroTitle: "Van hire in Loughborough for moves, work and collections",
      heroDescription: "Practical van hire in Loughborough for house moves, trade jobs, stock collections, deliveries and specialist transport when a standard car is not enough.",
      heroSecondaryActionLabel: "View van options",
      mainServiceKicker: "Loughborough van fleet",
      mainServiceTitle: "Van hire for practical jobs across Loughborough and beyond",
      mainServiceDescription: `Our van hire service in Loughborough is built for customers who need a vehicle that can handle a clear job without unnecessary complexity. Some bookings are about moving furniture, stock or equipment locally, while others involve trade work, deliveries or longer regional travel using the A6, A512, A60 and M1. That means the useful choice is rarely one single van size. Instead, it helps to have a spread that covers compact carry jobs, mid-sized working vans and larger load-space options.

Loughborough also works well as a base for mixed local and regional van use. A booking might start with a collection near the town centre, continue to a residential address, then widen into a run towards Leicester, Derby, Nottingham or further up the motorway network. Keeping the fleet practical lets us support that variety with vans that suit straightforward everyday jobs as well as more specialist transport needs.`,
      mainVehicles: [
        { body: "A compact option for smaller Loughborough jobs where you need enclosed load space without driving something oversized.", alt: "Caddy van for compact load carrying in Loughborough" },
        { body: "Useful for everyday trade work, deliveries and light moving jobs around Loughborough and nearby routes.", alt: "Ford Transit SWB van for local Loughborough hire" },
        { body: "A practical automatic van for Loughborough customers who want easier driving in town traffic and on longer road sections.", alt: "VW Transporter automatic van hire in Loughborough" },
        { body: "A solid fit for medium loads, site equipment and move-related jobs across Loughborough.", alt: "Ford Transit MWB van ready for practical Loughborough jobs" },
        { body: "A strong choice for longer items, fuller loads and larger one-vehicle jobs starting in Loughborough.", alt: "Ford Transit LWB van for larger Loughborough loads" },
        { body: "Useful when extra cargo length matters more than keeping the van compact, especially for commercial or event loads.", alt: "4 metre Sprinter van available for Loughborough hire" },
        { body: "Ideal when the Loughborough booking involves bulky furniture, appliances or stacked loads that need tail-lift help.", alt: "Luton box van with tail lift for moves in Loughborough" },
        { body: "A practical pick for open-load work, site materials and jobs where quick side access matters.", alt: "Dropside transit van for trade and site use in Loughborough" },
        { body: "Useful for rubble, green waste and site clearances where tipping capability saves time on the job.", alt: "3.5 tonne tipper van hire in Loughborough" },
        { body: "A specialist option for vehicle recovery and transport jobs that need the right platform rather than an ordinary van.", alt: "Recovery vehicle available from the Loughborough fleet" },
        { body: "Suitable for customers who need a flexible transport option with camper layout practicality for longer personal travel.", alt: "VW campervan available for Loughborough self-drive hire" },
        { body: "A specialist access vehicle for external maintenance, facilities work and higher-reach jobs around Loughborough.", alt: "12.5 metre cherry picker vehicle hire in Loughborough" },
      ],
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical van-hire range for Loughborough jobs",
      whyChooseDescription: "We focus on vans that make sense for the work in front of you, whether that means a compact enclosed load area, a Luton for moving day or a specialist vehicle for a more specific job.",
      whyChooseItems: [
        { title: "Useful size spread", body: "The fleet covers everything from compact vans to larger load-space options, helping Loughborough customers avoid booking more vehicle than they need." },
        { title: "Good fit for mixed work", body: "Trade runs, house moves, site jobs, collections and regional deliveries all place different demands on a van, and the range is set up around that." },
        { title: "Straightforward support", body: "We keep the conversation focused on the load, route and job type so the vehicle choice stays practical." },
        { title: "Specialist options available", body: "When a booking needs tail-lift support, open-load access, tipping or recovery capability, the wider fleet can cover that too." },
        { title: "Useful beyond Loughborough", body: "The van fleet works well for local bookings and for wider runs using Loughborough’s Leicestershire and East Midlands links." },
        { title: "Flexible self-drive choice", body: "Customers can move from a simple working van to something more specialist without having to switch providers." },
      ],
      featureCtaTitle: "Need the right van in Loughborough?",
      featureCtaDescription: "Tell us the job, load type and route, and we will help you choose a van that actually suits the work.",
      serviceAreasKicker: "Where van hire helps",
      serviceAreasTitle: "Van hire across Loughborough and surrounding routes",
      serviceAreasDescription: "We support van hire in Loughborough for home moves, site work, stock collections and regional transport across Leicestershire and the wider East Midlands.",
      localRelevanceKicker: "Van-hire guide",
      localRelevanceTitle: "Why van hire is useful in Loughborough",
      localRelevanceDescription: `Van hire works well in Loughborough because local jobs are often varied. One booking might be a household move between local addresses, another may involve trade materials, shop stock or equipment that needs to head out onto the A6 or M1 later the same day. A practical van fleet matters more than broad sales talk because the right shape and load space can save a lot of wasted time.

That is especially true when the route shifts between ordinary town access and wider road mileage. A van that stays easy enough for local stops but still carries the right load comfortably is usually the most useful choice for Loughborough customers.`,
      localRelevanceBlocks: [
        { title: "Useful for local moves and working jobs", body: `Loughborough van hire often centres on practical work: moving furniture, carrying tools, shifting stock or handling site materials. Having the right van size makes those bookings much easier to manage from the start.

That is why the fleet ranges from compact enclosed vans through to larger Lutons and specialist vehicles rather than trying to push one type of van at every job.` },
        { title: "A good base for wider East Midlands mileage", body: `Jobs starting in Loughborough often widen quickly towards Leicester, Derby, Nottingham or motorway-linked routes, so the van still needs to feel settled beyond local roads.

Choosing the right working vehicle early helps avoid repeat trips and unnecessary compromises once the route opens up.` },
        { title: "Specialist vehicles when the job needs them", body: `Some bookings are straightforward. Others need a tail lift, dropside access, tipping capability or a recovery platform.

Keeping those options available means Loughborough customers can match the vehicle to the actual task rather than trying to make the wrong van work.` },
      ],
      bottomCtaTitle: "Book van hire in Loughborough with practical guidance",
      bottomCtaDescription: "If you need a working van in Loughborough for a move, delivery, trade run or specialist transport job, contact us and we will help you choose the right option.",
      faqKicker: "Van-hire FAQs",
      faqTitle: "Common questions about van hire in Loughborough",
      faqs: [
        { question: "What sort of van hire do you offer in Loughborough?", answer: "We offer a practical spread from compact vans and Transit-sized working vehicles through to Lutons, dropsides, tippers, recovery vehicles and other specialist options." },
        { question: "Is Loughborough van hire suitable for house moves?", answer: "Yes. Many customers hire vans in Loughborough for furniture moves, appliance collections and one-day relocation work, particularly where larger enclosed load space or a tail lift helps." },
        { question: "Can I hire a van in Loughborough for trade or site work?", answer: "Yes. Trade jobs, site materials, tool transport and open-load work are all common reasons for van hire in Loughborough." },
        { question: "Do you have automatic vans available in Loughborough?", answer: "Yes, subject to availability. If you prefer automatic driving for local traffic or longer van mileage, ask when booking." },
        { question: "Can you help if I need something more specialist than a standard van?", answer: "Yes. The wider fleet includes vehicles such as tail-lift Lutons, dropsides, tippers, recovery vehicles and other specialist transport options." },
        { question: "How do I choose the right van for a Loughborough booking?", answer: "The most useful details are the load type, approximate size, route and whether the job needs enclosed space, open access, tipping capability or tail-lift support." },
      ],
    }

    const minibusHireTokens: ContentTokenSet = {
      metadata: {
        title: "Minibus Hire Loughborough | 7 to 17 Seater Self-Drive Options",
        description: "Minibus hire in Loughborough for family trips, airport runs, group events and team travel, with 7, 9, 12, 15 and 17 seater options available.",
      },
      heroImage: "/images/compactcarhireloughborough-co-uk-minibus-hire-main-fleet.png",
      heroAlt: "Self-drive minibus ready for passenger travel in Loughborough",
      heroTitle: "Minibus hire in Loughborough for group travel that stays practical",
      heroDescription: "Self-drive minibus hire in Loughborough for family travel, team transport, airport runs, event journeys and larger passenger groups that need more room than a standard car can offer.",
      heroSecondaryActionLabel: "View minibus options",
      mainServiceKicker: "Loughborough minibus fleet",
      mainServiceTitle: "Practical minibus hire for family, event and team travel",
      mainServiceDescription: `Minibus hire in Loughborough is most useful when everyone needs to travel together without splitting the group across several cars. Some bookings are for family outings, airport runs or wedding transport. Others are for sports teams, university-related travel, work groups or day trips that need more passenger space without stepping into coach territory.

That means the key thing is having a sensible spread of sizes. Smaller 7-seaters work well when you only need a little more room than a standard car, while 9, 12, 15 and 17 seater options help when the booking genuinely needs group capacity. Loughborough also sits in a useful position for wider travel across the East Midlands, so the minibus needs to stay practical once the day goes beyond local roads.`,
      mainVehicles: [
        { body: "A flexible smaller MPV for Loughborough bookings that need extra seats without moving all the way into a full minibus.", alt: "Vauxhall Zafira 5 plus 2 seat vehicle for Loughborough hire" },
        { body: "Useful when a Loughborough group needs seven seats with a familiar car-like drive for family or airport travel.", alt: "Ford Galaxy 7 seater manual available for Loughborough hire" },
        { body: "A practical automatic people carrier for Loughborough journeys where easier driving and seven-seat space both matter.", alt: "Ford Galaxy 7 seater automatic in the Loughborough fleet" },
        { body: "A solid option for nine-passenger travel when the booking needs extra capacity for events, teams or family groups.", alt: "9 seater manual minibus available in Loughborough" },
        { body: "Useful when a larger group wants the easier traffic handling of an automatic setup on a Loughborough booking.", alt: "9 seater automatic minibus for Loughborough group travel" },
        { body: "A practical 12-seater for bigger family, university-related or organisation travel starting in Loughborough.", alt: "12 seater minibus available for hire in Loughborough" },
        { body: "Helps when the Loughborough trip needs a little more capacity for group outings, events or work transport.", alt: "15 seater minibus for group journeys from Loughborough" },
        { body: "A larger group option that keeps the booking practical when you need near-coach capacity without stepping outside self-drive.", alt: "17 seater lite minibus available in Loughborough" },
        { body: "A full 17-seater choice for Loughborough customers who need the widest passenger capacity in the fleet.", alt: "17 seater self-drive minibus for larger Loughborough groups" },
      ],
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical minibus range for Loughborough group travel",
      whyChooseDescription: "We keep Loughborough minibus hire focused on useful passenger space, clear vehicle choice and the kind of routes groups actually need to cover, from local pickups to wider regional mileage.",
      whyChooseItems: [
        { title: "Wide passenger spread", body: "From smaller 7-seaters to larger 17-seat options, the range covers different kinds of group travel without forcing one size onto every booking." },
        { title: "Useful for mixed journey types", body: "Airport runs, day trips, event travel, family outings and team transport all place different demands on a minibus, and the fleet is shaped around that." },
        { title: "Straightforward support", body: "We keep the process focused on passenger numbers, luggage space and the route rather than vague sales language." },
        { title: "Good for local and wider mileage", body: "Loughborough minibuses need to stay practical both around town and on longer East Midlands or motorway-based travel." },
        { title: "Manual and automatic options", body: "Where suitable vehicles are available, we can support customers who prefer automatic driving for larger group transport." },
        { title: "A wider fleet when plans change", body: "If the group journey changes into a different kind of transport need, the wider fleet is also available." },
      ],
      featureCtaTitle: "Need the right minibus in Loughborough?",
      featureCtaDescription: "Tell us the passenger count, luggage needs and route, and we will help you line up a practical minibus for the trip.",
      serviceAreasKicker: "Where minibus hire helps",
      serviceAreasTitle: "Minibus hire across Loughborough and surrounding routes",
      serviceAreasDescription: "We support minibus hire in Loughborough for airport travel, group outings, team transport and wider journeys across Leicestershire and the East Midlands.",
      localRelevanceKicker: "Minibus-hire guide",
      localRelevanceTitle: "Why minibus hire is useful in Loughborough",
      localRelevanceDescription: `Minibus hire works well in Loughborough because group journeys often involve a mix of local pickup points and wider regional travel. Families may need to collect relatives from different parts of town before heading to an airport. Teams may need to travel together to an event. University-related groups may need one practical vehicle instead of a loose convoy of cars.

The right minibus keeps the whole plan more organised. It also makes luggage, timing and route planning easier because the group is moving together. That is especially helpful once the journey opens out beyond Loughborough towards Leicester, Derby, Nottingham or the motorway network.`,
      localRelevanceBlocks: [
        { title: "Useful when the whole group needs to stay together", body: `Many Loughborough minibus bookings are simply about making a day run more manageable. One vehicle for the whole group is often easier than splitting people across several cars.

That matters for timing, luggage and straightforward coordination, especially if the route includes pickups before the main journey begins.` },
        { title: "Good for airport runs, day trips and event travel", body: `Loughborough sits well for wider travel, so group bookings often move quickly beyond local roads. A practical minibus helps keep those longer runs organised without losing the local convenience of a self-drive booking.

It is particularly useful when the passenger group and their bags need to move together from start to finish.` },
        { title: "A clear choice of size matters", body: `The most useful minibus is the one that matches the actual group. Too small and the trip becomes cramped; too large and the vehicle feels unnecessary.

Keeping several seat-count options available makes it easier to choose something that fits the plan properly.` },
      ],
      bottomCtaTitle: "Book minibus hire in Loughborough with practical support",
      bottomCtaDescription: "If you need a minibus in Loughborough for family, event, airport or team travel, contact us and we will help you choose the right size for the journey.",
      faqKicker: "Minibus-hire FAQs",
      faqTitle: "Common questions about minibus hire in Loughborough",
      faqs: [
        { question: "What sizes of minibus hire do you offer in Loughborough?", answer: "We offer a practical spread including 7-seater, 9-seater, 12-seater, 15-seater and 17-seater options so the booking can fit the actual group size." },
        { question: "Is Loughborough minibus hire suitable for airport runs?", answer: "Yes. Many customers hire minibuses in Loughborough for airport transfers where passengers and luggage need to travel together rather than across multiple cars." },
        { question: "Can I hire a minibus in Loughborough for family or event travel?", answer: "Yes. Family outings, weddings, celebrations and group day trips are all common reasons for minibus hire in Loughborough." },
        { question: "Do you have automatic minibus options in Loughborough?", answer: "Yes, subject to availability. If automatic driving is preferred for a larger passenger vehicle, ask when you book." },
        { question: "How do I choose the right minibus size?", answer: "The most useful details are the passenger count, expected luggage, route and whether the trip includes local pickups before the wider journey starts." },
        { question: "Can you help if the trip later needs a different vehicle type?", answer: "Yes. If the journey changes, the wider self-drive fleet includes other vehicle types that may suit the new plan better." },
      ],
    }

    const truckHireTokens: ContentTokenSet = {
      metadata: {
        title: "Truck Hire Loughborough | Box, Curtain, Tipper and Sleeper Trucks",
        description: "Truck hire in Loughborough for commercial loads, removals, site work and specialist transport, with box, curtain-side, dropside and sleeper trucks available.",
      },
      heroImage: "/images/compactcarhireloughborough-co-uk-truck-hire-main-fleet.png",
      heroAlt: "Self-drive truck ready for practical haulage work in Loughborough",
      heroTitle: "Truck hire in Loughborough for larger loads and working jobs",
      heroDescription: "Truck hire in Loughborough for commercial transport, removals, site work, heavier loads and specialist jobs that need more capacity than a van can provide.",
      heroSecondaryActionLabel: "View truck options",
      mainServiceKicker: "Loughborough truck fleet",
      mainServiceTitle: "Self-drive trucks for heavier work across Loughborough and beyond",
      mainServiceDescription: `Truck hire in Loughborough is about matching the vehicle to the job rather than treating every load the same. Some customers need a practical box body for removals or larger deliveries. Others need dropside or tipper access for site work, curtain-side space for commercial movement or sleeper-equipped vehicles for longer haulage patterns. The useful thing is having the right format available without making the booking more complicated than it needs to be.

Loughborough is also well placed for work that moves beyond local roads. Jobs can start in town, pass through industrial estates or residential loading points, then widen out across Leicestershire, Derbyshire, Nottinghamshire and the motorway network. That makes a practical self-drive truck fleet valuable when the job needs more carrying capacity, better access or a more specialist working vehicle than a standard van can provide.`,
      mainVehicles: [
        { body: "A practical box-body option for Loughborough jobs that need enclosed load space and tail-lift help without stepping into larger truck classes.", alt: "Ford Luton tail lift truck for Loughborough carrying jobs" },
        { body: "Useful for site clearances, rubble, green waste and aggregate-style loads where tipping capability saves time.", alt: "3.5 tonne tipper truck available in Loughborough" },
        { body: "A specialist option when the Loughborough booking involves vehicle recovery or transport rather than ordinary freight.", alt: "3.5 tonne recovery truck for specialist hire in Loughborough" },
        { body: "A strong fit for larger enclosed loads that need more capacity than a Luton but still benefit from tail-lift support.", alt: "7.5 tonne box truck with tail lift for Loughborough work" },
        { body: "Useful for commercial loads that need side access and practical loading flexibility rather than a fixed box body.", alt: "7.5 tonne curtain-side truck for Loughborough transport jobs" },
        { body: "Helps when the job needs open-load access for building materials, machinery or awkward site items.", alt: "7.5 tonne dropside truck available in Loughborough" },
        { body: "A practical tipper choice for heavier site work and bulk materials where quick unloading matters.", alt: "7.5 tonne tipper truck for Loughborough construction and clearance jobs" },
        { body: "Useful when the route combines heavier carrying needs with sleeper and tail-lift practicality for longer working days.", alt: "7.5 tonne sleeper tail-lift truck available from the Loughborough fleet" },
        { body: "A larger enclosed option for substantial commercial loads that outgrow lighter truck classes.", alt: "18 tonne box truck ready for hire in Loughborough" },
        { body: "Helps with larger side-loaded freight where curtain access makes the load easier to handle efficiently.", alt: "18 tonne curtain-side truck in the Loughborough fleet" },
        { body: "A high-capacity curtain-side option for larger commercial movements and more demanding freight patterns.", alt: "26 tonne curtain-side truck available in Loughborough" },
        { body: "A specialist long-haul style option for larger commercial transport requirements that need serious capacity and sleeper support.", alt: "44 tonne sleeper truck for larger Loughborough haulage jobs" },
      ],
      whyChooseKicker: "Why choose us",
      whyChooseTitle: "A practical truck range for Loughborough working jobs",
      whyChooseDescription: "We focus on useful truck types, clear booking support and the kind of carrying jobs customers actually need to handle across Loughborough and the wider region.",
      whyChooseItems: [
        { title: "Useful truck formats", body: "From box bodies and curtain-siders to dropsides, tippers and sleeper-equipped vehicles, the range covers different kinds of work rather than pretending one truck fits every load." },
        { title: "Good for mixed working routes", body: "Local loading points, industrial estates, site access and wider motorway mileage all place different demands on a truck, and the fleet is shaped around that." },
        { title: "Straightforward support", body: "We keep the booking conversation focused on the load, access needs and route so the truck choice stays practical." },
        { title: "Tail-lift and open-load options", body: "Where the job needs easier unloading or open access, the range includes the right body styles rather than forcing a compromise." },
        { title: "Useful beyond Loughborough", body: "The truck fleet works for local Loughborough jobs and for wider Leicestershire and motorway-linked work." },
        { title: "Specialist vehicles available", body: "Recovery and sleeper-equipped vehicles help cover jobs that go beyond straightforward box or curtain-side carrying." },
      ],
      featureCtaTitle: "Need the right truck in Loughborough?",
      featureCtaDescription: "Tell us the load, access needs and route, and we will help you choose a truck that matches the work properly.",
      serviceAreasKicker: "Where truck hire helps",
      serviceAreasTitle: "Truck hire across Loughborough and surrounding routes",
      serviceAreasDescription: "We support truck hire in Loughborough for removals, freight, site work, heavier loads and specialist transport across Leicestershire and the wider East Midlands.",
      localRelevanceKicker: "Truck-hire guide",
      localRelevanceTitle: "Why truck hire is useful in Loughborough",
      localRelevanceDescription: `Truck hire works well in Loughborough because heavier jobs often move between very different conditions in one booking. A route may start with ordinary local loading access, shift through industrial or commercial areas, then head out onto larger regional links or the motorway network. That means the body style, carrying capacity and unloading setup all matter.

Having the right truck saves time, protects the load and makes the job easier to complete in one vehicle. For Loughborough customers, that can mean anything from a tail-lift box body for removals to a tipper for site work or a curtain-side for larger commercial movement.`,
      localRelevanceBlocks: [
        { title: "Useful when a van is no longer enough", body: `Some Loughborough jobs simply outgrow van space or van payload. Once the load becomes bulkier, heavier or harder to handle efficiently, moving into the right truck makes the whole job more workable.

That can apply to removals, site work, trade transport and larger commercial loads alike.` },
        { title: "The right body style matters", body: `Truck hire is not just about size. Tail-lift support, curtain access, dropside practicality or tipping capability can all change how easy the job is to load, move and unload.

Choosing the right setup from the start helps avoid awkward compromises on the day.` },
        { title: "A good fit for wider working mileage", body: `Loughborough routes often widen beyond local streets into larger Leicestershire and motorway-linked travel. The truck still needs to remain practical once the job opens out.

That is why the fleet includes options designed for different carrying patterns rather than a one-format approach.` },
      ],
      bottomCtaTitle: "Book truck hire in Loughborough with practical guidance",
      bottomCtaDescription: "If you need a truck in Loughborough for removals, site work, commercial carrying or specialist transport, contact us and we will help you choose the right vehicle.",
      faqKicker: "Truck-hire FAQs",
      faqTitle: "Common questions about truck hire in Loughborough",
      faqs: [
        { question: "What sort of truck hire do you offer in Loughborough?", answer: "We offer a practical range including box trucks, curtain-siders, dropsides, tippers, tail-lift vehicles, recovery trucks and sleeper-equipped trucks." },
        { question: "Is Loughborough truck hire suitable for removals and larger deliveries?", answer: "Yes. Box trucks and tail-lift options are often a strong fit for removals, bulky deliveries and larger enclosed loads." },
        { question: "Can I hire a truck in Loughborough for site or trade work?", answer: "Yes. Dropsides, tippers and other working truck formats are useful for site materials, clearance jobs and practical trade transport." },
        { question: "Do you have specialist truck options in Loughborough?", answer: "Yes. The wider range includes specialist options such as recovery trucks and sleeper-equipped vehicles where the job calls for them." },
        { question: "How do I choose the right truck for a Loughborough booking?", answer: "The most useful details are the load type, whether it needs enclosed or open access, whether tail-lift or tipping help is useful, and how much wider road mileage the job includes." },
        { question: "Can you help if I am not sure whether I need a van or a truck?", answer: "Yes. If you tell us the load, access points and route, we can help you decide whether a van still makes sense or whether moving into a truck is the better option." },
      ],
    }

        const location1Tokens = createNearbyLocationTokens({
          location: "Leicester",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for city travel around Leicester",
          metadataDescription: "Compact car hire in Leicester for city driving, station access and practical regional travel across Leicestershire.",
          heroDescription: "Compact car hire in Leicester for city travel, business appointments, station access and wider routes where a smaller car keeps the day easier to manage.",
          serviceDescription: `Compact car hire in Leicester works well when the booking mixes heavier city traffic with the need to stay practical on bigger routes. A smaller hatchback is easier around city-centre parking, ring-road movements and repeated stops, but it still gives enough comfort once the journey widens towards the A6, A46, M1 or wider regional links.

That makes compact cars a sensible option for business visits, station collections, family travel and replacement transport in Leicester. The focus stays on useful self-drive cars that feel manageable in the city without becoming limiting once the route stretches further out.`,
          whyChooseDescription: "We keep Leicester compact car hire practical for city-centre use first, while making sure the vehicle still suits wider road mileage when the day opens up.",
          serviceAreasDescription: "We support compact car hire in Leicester and nearby routes, including city-centre travel, station access and onward journeys towards the A6, A46 and M1 links.",
          localRelevanceDescription: `Leicester rewards compact car hire because city driving here often means repeated stops, mixed parking conditions and quick changes between busy urban roads and wider regional links. A smaller car feels easier to place around the centre, station-side travel or ordinary residential roads, while still remaining useful once the booking heads onto larger Leicestershire routes.

That balance matters on trips that combine work, shopping, station access and wider mileage in a single day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "Useful for city-centre parking and repeated stops", body: `Leicester journeys often involve ordinary city-centre parking, station access and short urban hops between appointments. A compact car keeps those movements easier and less awkward than something larger.

That simplicity matters when the day involves several stops rather than one single destination.` },
            { title: "A good fit once the route widens", body: `A Leicester booking does not always stay in the city. Routes can quickly widen towards the A6, A46 and M1, so the car still needs to stay comfortable once the local section is done.

A compact hatchback gives you that middle ground without overcommitting to a bigger vehicle.` },
            { title: "Practical for work and personal travel alike", body: `Compact car hire in Leicester suits business visits, replacement transport, family trips and ordinary day-to-day use because the vehicle remains easy to live with throughout the booking.

If the trip later needs more room, the wider fleet is still there to support it.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Leicester?", answer: "Compact cars are a practical fit in Leicester because they stay easy in city traffic and parking while still remaining comfortable enough for A-road and M1 mileage." },
            { question: "Is compact car hire in Leicester useful for station access?", answer: "Yes. Compact cars work well for Leicester station travel and onward city movement because they are simpler to manoeuvre and park around busier areas." },
            { question: "Do you offer automatic compact cars in Leicester?", answer: "Yes, subject to availability. If you prefer automatic driving for Leicester traffic or wider Leicestershire travel, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Leicester?", answer: "Yes. Compact cars are commonly used for meetings, office visits, client travel and practical day-to-day professional mileage in Leicester." },
            { question: "Can Leicester compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed city and regional driving when you do not need a larger vehicle." },
            { question: "What if I need more space later?", answer: "If the Leicester booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location2Tokens = createNearbyLocationTokens({
          location: "Derby",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car prepared for practical city travel in Derby",
          metadataDescription: "Compact car hire in Derby for city driving, station access and practical regional mileage using the A52, A38 and wider East Midlands links.",
          heroDescription: "Compact car hire in Derby for everyday city travel, business appointments, station journeys and regional mileage where a smaller car keeps things easy.",
          serviceDescription: `Compact car hire in Derby works well when the journey needs something easy enough for city-centre roads and ordinary parking, yet still comfortable once the route widens onto the A52, A38 or other East Midlands links. A smaller hatchback helps with repeated stops, station access and local appointments while still being practical for wider mileage afterwards.

That balance suits a lot of Derby travel, including business use, replacement transport, family visits and mixed local-regional bookings. You get a self-drive car that feels sensible in the city without becoming limited when the day stretches further out.`,
          whyChooseDescription: "We keep Derby compact car hire practical for city use first, while making sure the vehicle also works well for wider East Midlands mileage.",
          serviceAreasDescription: "We support compact car hire in Derby and nearby East Midlands routes, including city-centre driving, station access and onward travel using the A52 and A38.",
          localRelevanceDescription: `Derby rewards compact car hire because many local bookings involve city-centre traffic, ordinary parking and mixed routes that quickly widen beyond town. A smaller vehicle feels easier around the centre, Pride Park-side travel or routine local stops, but it still remains comfortable enough once the route opens onto the A52, A38 or surrounding regional roads.

That combination is useful for work visits, station travel, family movement and short regional bookings where a normal, manageable hatchback is the best fit.`,
          localBlocks: [
            { title: "Useful around the city, station and local stops", body: `Compact cars make a lot of sense in Derby because city-centre travel, station access and everyday parking are all easier with a smaller vehicle.

That helps when the route includes several short stops and routine urban manoeuvring.` },
            { title: "Comfortable once the trip widens onto major roads", body: `Derby journeys often move quickly onto the A52, A38 and wider East Midlands routes, so the car still needs to stay practical beyond the city section.

A compact hatchback gives you that balance without pushing you into unnecessary size.` },
            { title: "A practical fit for mixed day-to-day use", body: `Business mileage, replacement transport and family travel all benefit from a car that is easy to live with throughout the booking.

Compact hire in Derby stays useful in those situations because it keeps the journey straightforward from start to finish.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Derby?", answer: "Compact cars are a practical fit in Derby because they stay easy in city traffic and parking while still being comfortable enough for A52 and A38 mileage." },
            { question: "Is compact car hire in Derby useful for station access?", answer: "Yes. Compact cars work well for Derby station travel and onward city movement because they are simpler to manoeuvre and park around busier areas." },
            { question: "Do you offer automatic compact cars in Derby?", answer: "Yes, subject to availability. If you prefer automatic driving for Derby traffic or wider East Midlands routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Derby?", answer: "Yes. Compact cars are commonly used for meetings, office visits and practical day-to-day professional mileage in Derby." },
            { question: "Can Derby compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed city and regional driving when you do not need a larger vehicle." },
            { question: "What if I need more space later?", answer: "If the Derby booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location3Tokens = createNearbyLocationTokens({
          location: "Nottingham",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car prepared for practical city travel in Nottingham",
          metadataDescription: "Compact car hire in Nottingham for city driving, station access and practical regional mileage across Nottinghamshire.",
          heroDescription: "Compact car hire in Nottingham for everyday city travel, business appointments, station journeys and regional mileage where a smaller car keeps things easy.",
          serviceDescription: `Compact car hire in Nottingham works well when the journey needs something easy enough for city-centre roads and ordinary parking, yet still comfortable once the route widens onto the ring road, A52 or wider Nottinghamshire links. A smaller hatchback helps with repeated stops, station access and local appointments while still being practical for wider mileage afterwards.

That balance suits a lot of Nottingham travel, including business use, replacement transport, family visits and mixed local-regional bookings. You get a self-drive car that feels sensible in the city without becoming limited when the day stretches further out.`,
          whyChooseDescription: "We keep Nottingham compact car hire practical for city use first, while making sure the vehicle also works well for wider East Midlands mileage.",
          serviceAreasDescription: "We support compact car hire in Nottingham and nearby routes, including city-centre driving, station access and onward travel using the A52, ring-road links and wider regional routes.",
          localRelevanceDescription: `Nottingham rewards compact car hire because many local bookings involve city-centre traffic, ordinary parking and mixed routes that quickly widen beyond town. A smaller vehicle feels easier around the centre, station-side travel or routine local stops, but it still remains comfortable enough once the route opens into wider Nottinghamshire mileage.

That combination is useful for work visits, station travel, family movement and short regional bookings where a normal, manageable hatchback is the best fit.`,
          localBlocks: [
            { title: "Useful around the city, station and local stops", body: `Compact cars make a lot of sense in Nottingham because city-centre travel, station access and everyday parking are all easier with a smaller vehicle.

That helps when the route includes several short stops and routine urban manoeuvring.` },
            { title: "Comfortable once the trip widens onto major roads", body: `Nottingham journeys often move quickly onto the A52 and wider East Midlands routes, so the car still needs to stay practical beyond the city section.

A compact hatchback gives you that balance without pushing you into unnecessary size.` },
            { title: "A practical fit for mixed day-to-day use", body: `Business mileage, replacement transport and family travel all benefit from a car that is easy to live with throughout the booking.

Compact hire in Nottingham stays useful in those situations because it keeps the journey straightforward from start to finish.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Nottingham?", answer: "Compact cars are a practical fit in Nottingham because they stay easy in city traffic and parking while still being comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Nottingham useful for station access?", answer: "Yes. Compact cars work well for Nottingham station travel and onward city movement because they are simpler to manoeuvre and park around busier areas." },
            { question: "Do you offer automatic compact cars in Nottingham?", answer: "Yes, subject to availability. If you prefer automatic driving for Nottingham traffic or wider regional routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Nottingham?", answer: "Yes. Compact cars are commonly used for meetings, office visits and practical day-to-day professional mileage in Nottingham." },
            { question: "Can Nottingham compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed city and regional driving when you do not need a larger vehicle." },
            { question: "What if I need more space later?", answer: "If the Nottingham booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location4Tokens = createNearbyLocationTokens({
          location: "Melton Mowbray",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Melton Mowbray",
          metadataDescription: "Compact car hire in Melton Mowbray for town driving, market-town travel and practical Leicestershire mileage.",
          heroDescription: "Compact car hire in Melton Mowbray for everyday local travel, appointments and practical wider mileage where a smaller hatchback keeps things simple.",
          serviceDescription: `Compact car hire in Melton Mowbray makes sense when the booking needs something easy around an ordinary market-town setting but still useful once the route heads wider across Leicestershire. A smaller hatchback helps with parking, repeated local stops and everyday manoeuvring while still being comfortable enough for broader regional mileage.

That practicality suits replacement transport, family visits, business appointments and mixed-use journeys around Melton Mowbray. You get a self-drive car that stays manageable without feeling under-equipped for the wider road section of the day.`,
          whyChooseDescription: "We keep Melton Mowbray compact car hire practical for ordinary local use while making sure the car also stays useful on wider Leicestershire routes.",
          serviceAreasDescription: "We support compact car hire in Melton Mowbray and nearby routes, including town travel, local appointments and onward Leicestershire mileage.",
          localRelevanceDescription: `Melton Mowbray is a good fit for compact car hire because many local bookings combine everyday town movement with wider county travel. A smaller vehicle is useful for routine parking and short local stops, but it still remains comfortable enough once the booking widens beyond town.

That balance matters on trips that mix appointments, shopping, visits and regional mileage in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Melton travel", body: `Compact cars are useful in Melton Mowbray because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Melton Mowbray trips often widen beyond local roads into broader Leicestershire mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Melton Mowbray bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Melton Mowbray?", answer: "Compact cars are a practical option in Melton Mowbray because they stay easy for local driving and parking while remaining comfortable enough for wider Leicestershire mileage." },
            { question: "Is compact car hire in Melton Mowbray useful for shopping and town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail stops that make up many Melton Mowbray journeys." },
            { question: "Do you offer automatic compact cars in Melton Mowbray?", answer: "Yes, subject to availability. If you prefer automatic driving for Melton Mowbray traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Melton Mowbray?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Melton Mowbray." },
            { question: "Can Melton Mowbray compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Melton Mowbray booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location5Tokens = createNearbyLocationTokens({
          location: "Coalville",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for everyday travel around Coalville",
          metadataDescription: "Compact car hire in Coalville for town driving, business mileage and practical Leicestershire regional travel.",
          heroDescription: "Compact car hire in Coalville for everyday town travel, work visits and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Coalville works well because local bookings often mix ordinary town movement with quick access to wider roads and nearby commercial routes. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still staying comfortable enough for broader regional mileage.

That practicality suits replacement transport, family visits, business appointments and mixed-use journeys around Coalville. You get a self-drive car that stays manageable for local driving without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Coalville compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Coalville and nearby Leicestershire routes, including town travel, retail stops and onward regional mileage.",
          localRelevanceDescription: `Coalville is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider routes. A smaller vehicle is useful for ordinary parking, shorter town trips and repeated local stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Coalville driving", body: `Compact cars are useful in Coalville because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Coalville trips can quickly widen beyond local roads into larger Leicestershire mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Coalville bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Coalville?", answer: "Compact cars are a practical option in Coalville because they stay easy for local driving and parking while remaining comfortable enough for wider Leicestershire mileage." },
            { question: "Is compact car hire in Coalville useful for shopping and town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail stops that make up many Coalville journeys." },
            { question: "Do you offer automatic compact cars in Coalville?", answer: "Yes, subject to availability. If you prefer automatic driving for Coalville traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Coalville?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Coalville." },
            { question: "Can Coalville compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Coalville booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location6Tokens = createNearbyLocationTokens({
          location: "Hinckley",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Hinckley",
          metadataDescription: "Compact car hire in Hinckley for town driving, business mileage and practical Leicestershire regional travel.",
          heroDescription: "Compact car hire in Hinckley for everyday local travel, work visits and wider mileage where a smaller hatchback stays easy to handle.",
          serviceDescription: `Compact car hire in Hinckley works well because local bookings often mix ordinary town movement with quick access to wider roads and nearby commercial routes. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still staying comfortable enough for broader regional mileage.

That practicality suits replacement transport, family visits, business appointments and mixed-use journeys around Hinckley. You get a self-drive car that stays manageable for local driving without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Hinckley compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Hinckley and nearby Leicestershire routes, including town travel, retail stops and onward regional mileage.",
          localRelevanceDescription: `Hinckley is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider routes. A smaller vehicle is useful for ordinary parking, shorter town trips and repeated local stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Hinckley driving", body: `Compact cars are useful in Hinckley because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Hinckley trips can quickly widen beyond local roads into larger Leicestershire mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Hinckley bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Hinckley?", answer: "Compact cars are a practical option in Hinckley because they stay easy for local driving and parking while remaining comfortable enough for wider Leicestershire mileage." },
            { question: "Is compact car hire in Hinckley useful for shopping and town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail stops that make up many Hinckley journeys." },
            { question: "Do you offer automatic compact cars in Hinckley?", answer: "Yes, subject to availability. If you prefer automatic driving for Hinckley traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Hinckley?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Hinckley." },
            { question: "Can Hinckley compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Hinckley booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location7Tokens = createNearbyLocationTokens({
          location: "Ashby-de-la-Zouch",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Ashby-de-la-Zouch",
          metadataDescription: "Compact car hire in Ashby-de-la-Zouch for local driving, appointments and practical wider East Midlands mileage.",
          heroDescription: "Compact car hire in Ashby-de-la-Zouch for everyday town travel, work visits and practical regional mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Ashby-de-la-Zouch works well because local bookings often mix ordinary town movement with wider road links across the East Midlands. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still staying comfortable enough for broader regional mileage.

That practicality suits replacement transport, family visits, business appointments and mixed-use journeys around Ashby-de-la-Zouch. You get a self-drive car that stays manageable for local driving without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Ashby-de-la-Zouch compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Ashby-de-la-Zouch and nearby East Midlands routes, including town travel, local appointments and onward regional mileage.",
          localRelevanceDescription: `Ashby-de-la-Zouch is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider routes. A smaller vehicle is useful for ordinary parking, shorter town trips and repeated local stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Ashby travel", body: `Compact cars are useful in Ashby-de-la-Zouch because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Ashby-de-la-Zouch trips can quickly widen beyond local roads into larger East Midlands mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Ashby-de-la-Zouch bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Ashby-de-la-Zouch?", answer: "Compact cars are a practical option in Ashby-de-la-Zouch because they stay easy for local driving and parking while remaining comfortable enough for wider East Midlands mileage." },
            { question: "Is compact car hire in Ashby-de-la-Zouch useful for shopping and town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail stops that make up many Ashby-de-la-Zouch journeys." },
            { question: "Do you offer automatic compact cars in Ashby-de-la-Zouch?", answer: "Yes, subject to availability. If you prefer automatic driving for Ashby-de-la-Zouch traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Ashby-de-la-Zouch?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Ashby-de-la-Zouch." },
            { question: "Can Ashby-de-la-Zouch compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Ashby-de-la-Zouch booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location8Tokens = createNearbyLocationTokens({
          location: "Long Eaton",
          heroImage: "/images/compactcarhireloughborough-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Long Eaton",
          metadataDescription: "Compact car hire in Long Eaton for local driving, station access and practical East Midlands regional travel.",
          heroDescription: "Compact car hire in Long Eaton for everyday local travel, station journeys and wider mileage where a smaller hatchback keeps things straightforward.",
          serviceDescription: `Compact car hire in Long Eaton works well because local bookings often mix ordinary town movement with quick access to wider East Midlands roads. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still staying comfortable enough for broader regional mileage.

That practicality suits replacement transport, family visits, business appointments and mixed-use journeys around Long Eaton. You get a self-drive car that stays manageable for local driving without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Long Eaton compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Long Eaton and nearby East Midlands routes, including town travel, station access and onward regional mileage.",
          localRelevanceDescription: `Long Eaton is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider routes. A smaller vehicle is useful for ordinary parking, shorter town trips and repeated local stops, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Long Eaton driving", body: `Compact cars are useful in Long Eaton because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Long Eaton trips can quickly widen beyond local roads into larger East Midlands mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Long Eaton bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Long Eaton?", answer: "Compact cars are a practical option in Long Eaton because they stay easy for local driving and parking while remaining comfortable enough for wider East Midlands mileage." },
            { question: "Is compact car hire in Long Eaton useful for station and town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary station-linked travel that make up many Long Eaton journeys." },
            { question: "Do you offer automatic compact cars in Long Eaton?", answer: "Yes, subject to availability. If you prefer automatic driving for Long Eaton traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Long Eaton?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Long Eaton." },
            { question: "Can Long Eaton compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Long Eaton booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "compact-car": createContentSet({
    tokens: homepageTokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "main-flow-vehicles",
    currentLocationName: siteConfig.locationName,
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  "van-hire": createContentSet({
    tokens: vanHireTokens,
    mainVehicleNames: vanMainNames,
    mainVehicleImages: vanMainImages,
    inventorySectionId: "van-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "truck-hire": createContentSet({
    tokens: truckHireTokens,
    mainVehicleNames: truckMainNames,
    mainVehicleImages: truckMainImages,
    inventorySectionId: "truck-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "minibus-hire": createContentSet({
    tokens: minibusHireTokens,
    mainVehicleNames: minibusMainNames,
    mainVehicleImages: minibusMainImages,
    inventorySectionId: "minibus-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
}

export const locationPageContents: Record<number, ServicePageContent> = {
  1: createContentSet({
    tokens: location1Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location1-vehicles",
    currentLocationName: "Leicester",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  2: createContentSet({
    tokens: location2Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location2-vehicles",
    currentLocationName: "Derby",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  3: createContentSet({
    tokens: location3Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location3-vehicles",
    currentLocationName: "Nottingham",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  4: createContentSet({
    tokens: location4Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location4-vehicles",
    currentLocationName: "Melton Mowbray",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  5: createContentSet({
    tokens: location5Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location5-vehicles",
    currentLocationName: "Coalville",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  6: createContentSet({
    tokens: location6Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location6-vehicles",
    currentLocationName: "Hinckley",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  7: createContentSet({
    tokens: location7Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location7-vehicles",
    currentLocationName: "Ashby-de-la-Zouch",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  8: createContentSet({
    tokens: location8Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location8-vehicles",
    currentLocationName: "Long Eaton",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
}
