'use server'

import { 
  getFirestore, 
  collection, 
  setDoc, 
  doc, 
  serverTimestamp,
  type Firestore,
} from 'firebase/firestore'

import firebaseApp from './firebase-app'
import type { ContactInfo } from '../types'

let dbInstance: Firestore | undefined = undefined

const getDBInstance = (name: string): Firestore | null => {
  if (!firebaseApp) {
    console.warn('Firebase not initialized, cannot get database instance');
    return null;
  }
  if (!dbInstance) {
    dbInstance = getFirestore(firebaseApp, name) 
  }
  return dbInstance  
}

const storeContact = async ( formData: ContactInfo, enclosure: any ) => {
  const email = formData.email
  const phone = formData.phone
  const dbName = enclosure?.dbId
  const tableName = enclosure?.listId

  // Return early if Firebase is not configured
  if (!firebaseApp) {
    console.warn('Firebase not configured, skipping contact storage');
    return { success: true, error: null, id: email };
  }

  let error: any | null = null
  const db = getDBInstance(dbName);
  if (!db) {
    return { success: false, error: 'Database not available' };
  }
  
  const tableRef = collection(db, tableName)

  try {
    await setDoc(doc(tableRef, email), {
      email,
      phone,
      timestamp: serverTimestamp(),
    })
    return { success: !error, error, id: email }
  }
  catch (e) {  
    console.error('Error writing contact info to database: ', e)
    error = e  
  }  
  
  return { success: !error, error }  
}

export {
  storeContact as default
}
