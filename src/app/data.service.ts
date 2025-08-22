import { Injectable } from '@angular/core';

export interface Fort {
  id: string;
  name: string;
  location: string;
  mapUrl: string;
  description: string;
  built: string;
  address: string;
  phone?: string;
  hours: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

export interface Guide {
  id: string;
  name: string;
  experience: number;
  specialization: string[];
  rating: number;
  phone: string;
  email: string;
  available: boolean;
  assignedFort?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private forts: Fort[] = [
    {
      id: 'rajgad',
      name: 'Rajgad Fort',
      location: 'Pune, Maharashtra',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.2003828502043!2d73.67963787500634!3d18.24663338279457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc28fa3eb07c019%3A0xe2f323ba03aacd31!2sRajgad%20Fort!5e0!3m2!1sen!2sin!4v1735804444183!5m2!1sen!2sin',
      description: 'The fort has stood witness to many significant historic events including the birth of Shivaji\'s son Rajaram I, the death of Shivaji\'s wife Saibai, and the burial of Afzal Khan\'s head.',
      built: '1193',
      address: 'Balekilla Rd, Pune, Maharashtra 412213',
      hours: 'Open 24 hours',
      image: '../../assets/Rajgad Fort.jpeg',
      coordinates: { lat: 18.2466, lng: 73.6796 }
    },
    {
      id: 'sinhgad',
      name: 'Sinhgad Fort',
      location: 'Pune, Maharashtra',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.8!2d73.7553!3d18.3664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295c2c8e0c5c5%3A0x4b2b8b8b8b8b8b8b!2sSinhgad%20Fort!5e0!3m2!1sen!2sin!4v1735804444184!5m2!1sen!2sin',
      description: 'Sinhagad (Lion\'s Fort) is an ancient hill fortress located at around 28 km southwest of Pune. Previously known as Kondhana, the fort had been the site of many battles, most notably the Battle of Sinhagad in 1670.',
      built: '1193',
      address: 'H86M+F5H, Pune, Maharashtra 416806',
      phone: '098701 06259',
      hours: 'Open, closes 6:30 pm',
      image: '../../assets/sihngad fort.jpg',
      coordinates: { lat: 18.3664, lng: 73.7553 }
    },
    {
      id: 'shivneri',
      name: 'Shivneri Fort',
      location: 'Junnar, Maharashtra',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d73.8753!3d19.2064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1234567890%3A0x987654321!2sShivneri%20Fort!5e0!3m2!1sen!2sin!4v1735804444185!5m2!1sen!2sin',
      description: 'Shivneri Fort, the birthplace of Chhatrapati Shivaji Maharaj, is a historic fort located near Junnar in the Pune district of Maharashtra.',
      built: '1640',
      address: 'Shivneri Foot Path, Near Junnar Town, Pune, Maharashtra 410502',
      hours: 'Open, closes 8:00 pm',
      image: '../../assets/Shivneri Fort, Maharastra.jpg',
      coordinates: { lat: 19.2064, lng: 73.8753 }
    },
    {
      id: 'harihar',
      name: 'Harihar Fort',
      location: 'Nashik, Maharashtra',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.2!2d73.5167!3d19.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1234567890%3A0x987654321!2sHarihar%20Fort!5e0!3m2!1sen!2sin!4v1735804444186!5m2!1sen!2sin',
      description: 'Harihar Fort is a hill fort located in the Nashik district of Maharashtra, India. It is known for its unique architecture and stunning views.',
      built: '1636',
      address: 'Harihar Fort, Near Trimbak, Nashik, Maharashtra 422212',
      hours: 'Open, closes 8:00 pm',
      image: '../../assets/Harihar Fort🌿❤️.jpg',
      coordinates: { lat: 19.9167, lng: 73.5167 }
    },
    {
      id: 'harishchandragad',
      name: 'Harishchandragad Fort',
      location: 'Ahmednagar, Maharashtra',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5!2d73.8167!3d19.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1234567890%3A0x987654321!2sHarishchandragad%20Fort!5e0!3m2!1sen!2sin!4v1735804444187!5m2!1sen!2sin',
      description: 'The fort is quite ancient. Remnants of Microlithic man have been discovered here. The various Puranas include many references about Harishchandragad. Its origin is said to have been in the 6th century, during the rule of Kalachuri dynasty.',
      built: '11th century',
      address: 'Ahmednagar district, Maharashtra, India',
      hours: 'Open, closes 8:00 pm',
      image: '../../assets/Harishchandra Gad Temple⛰️🛕.jpg',
      coordinates: { lat: 19.3833, lng: 73.8167 }
    }
  ];

  private guides: Guide[] = [
    {
      id: '1',
      name: 'Rajesh Patil',
      experience: 8,
      specialization: ['Historical Tours', 'Trekking'],
      rating: 4.8,
      phone: '+91 9876543210',
      email: 'rajesh@guides.com',
      available: true
    },
    {
      id: '2',
      name: 'Priya Sharma',
      experience: 5,
      specialization: ['Photography Tours', 'Cultural Heritage'],
      rating: 4.6,
      phone: '+91 9876543211',
      email: 'priya@guides.com',
      available: true
    },
    {
      id: '3',
      name: 'Amit Desai',
      experience: 10,
      specialization: ['Adventure Tours', 'Historical Tours'],
      rating: 4.9,
      phone: '+91 9876543212',
      email: 'amit@guides.com',
      available: false,
      assignedFort: 'rajgad'
    }
  ];

  getForts(): Fort[] {
    return this.forts;
  }

  getFortById(id: string): Fort | undefined {
    return this.forts.find(fort => fort.id === id);
  }

  getGuides(): Guide[] {
    return this.guides;
  }

  getAvailableGuides(): Guide[] {
    return this.guides.filter(guide => guide.available);
  }

  assignGuideToFort(guideId: string, fortId: string): boolean {
    const guide = this.guides.find(g => g.id === guideId);
    const fort = this.forts.find(f => f.id === fortId);
    
    if (guide && fort && guide.available) {
      guide.available = false;
      guide.assignedFort = fortId;
      return true;
    }
    return false;
  }

  unassignGuide(guideId: string): boolean {
    const guide = this.guides.find(g => g.id === guideId);
    if (guide) {
      guide.available = true;
      delete guide.assignedFort;
      return true;
    }
    return false;
  }
}