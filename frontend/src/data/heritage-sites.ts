// frontend/src/data/heritage-sites.ts

import { db } from '../firebase/config';
import { collection, getDocs, query, where, DocumentData } from 'firebase/firestore';

/**
 * Heritage Site data structure
 * This interface defines the structure for all heritage site data in the application
 */
export interface HeritageSite {
  id: number;
  title: string;
  location: string;
  year: string;
  image: string;
  description: string;
  category: string;
  isUNESCO?: boolean;
  arUrl?: string;
  elevation?: string;
  built?: string;
  history?: {
    ancient: string;
    construction: string;
    significance: string;
    legend: string;
    architecture: string;
    modernHistory: string;
  };
}

// Helper function to convert Firestore doc to our HeritageSite type
const mapDocToHeritageSite = (doc: DocumentData): HeritageSite => {
  return { id: doc.id, ...doc.data() } as HeritageSite;
}

/**
 * Helper functions for data access from Firestore
 * These functions provide convenient access to heritage site data for different use cases
 */

// Fetches all sites from the 'heritage-sites' collection
export const getFeaturedSites = async (): Promise<HeritageSite[]> => {
  try {
    const sitesCollection = collection(db, 'heritage-sites');
    const sitesSnapshot = await getDocs(sitesCollection);
    
    // CORRECTED MAPPING: Get doc.id and doc.data() separately
    const sitesList = sitesSnapshot.docs.map(doc => ({
      ...doc.data(),
      id: parseInt(doc.id, 10) // Assuming the ID in Firestore is a string number
    } as HeritageSite));

    console.log("Successfully fetched Featured Sites:", sitesList); // For debugging
    return sitesList;
  } catch (error) {
    console.error("Error fetching featured sites:", error);
    return []; // Return empty array on error
  }
};

// Fetches only the sites that have an 'arUrl' property
export const getARSites = async (): Promise<HeritageSite[]> => {
  try {
    const sitesCollection = collection(db, 'heritage-sites');
    const arQuery = query(sitesCollection, where('arUrl', '!=', null));
    const arSitesSnapshot = await getDocs(arQuery);

    // CORRECTED MAPPING: Get doc.id and doc.data() separately
    const arSitesList = arSitesSnapshot.docs.map(doc => ({
      ...doc.data(),
      id: parseInt(doc.id, 10)
    } as HeritageSite));
    
    console.log("Successfully fetched AR Sites:", arSitesList); // For debugging
    return arSitesList;
  } catch (error) {
    console.error("Error fetching AR sites:", error);
    return []; // Return empty array on error
  }
};

// Fetches a single site by its numeric ID
export const getSiteById = async (id: number): Promise<HeritageSite | undefined> => {
  try {
    const sitesCollection = collection(db, 'heritage-sites');
    const q = query(sitesCollection, where('id', '==', id));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return undefined;
    }
    
    const siteDoc = querySnapshot.docs[0];
    // CORRECTED MAPPING
    return { ...siteDoc.data(), id: parseInt(siteDoc.id, 10) } as HeritageSite;
  } catch (error) {
    console.error("Error fetching site by ID:", error);
    return undefined;
  }
};