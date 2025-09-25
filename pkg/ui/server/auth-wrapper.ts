import 'server-only'

// Wrapper for getUserServerSide that handles Firebase not being configured
export async function getUserServerSideSafe() {
  try {
    // Check if Firebase environment variables are present
    const hasFirebaseConfig = 
      process.env.FIREBASE_CLIENT_EMAIL && 
      process.env.FIREBASE_PROJECT_ID && 
      process.env.FIREBASE_PRIVATE_KEY;
    
    if (!hasFirebaseConfig) {
      console.log('Firebase not configured, returning null user');
      return null;
    }
    
    // Only import and use the actual function if Firebase is configured
    const { getUserServerSide } = await import('@hanzo/auth/server');
    return await getUserServerSide();
  } catch (error) {
    console.error('Error getting user server side:', error);
    return null;
  }
}