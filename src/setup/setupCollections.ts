import { databases } from '@/lib/appwrite';

async function setupCollections() {
  try {
    // Create or update dictionaries collection
    await setupDictionariesCollection();
    
    // Create or update words collection
    await setupWordsCollection();
    
    // Create or update admins collection
    await setupAdminsCollection();
    
    // Create or update user contributions collection
    await setupUserContributionsCollection();
    
    console.log('All collections set up successfully!');
  } catch (error) {
    console.error('Error setting up collections:', error);
  }
}

async function setupDictionariesCollection() {
  try {
    // Check if collection exists
    await databases.getCollection('dictionaries', 'dictionaries');
    console.log('Dictionaries collection already exists');
  } catch (error) {
    // Create collection if it doesn't exist
    await databases.createCollection(
      'dictionaries',
      'dictionaries',
      'Dictionaries'
    );
    
    // Set permissions
    await databases.updateCollection(
      'dictionaries',
      'dictionaries',
      'Dictionaries',
      ['role:all'], // Read
      ['role:admin'] // Write
    );
    
    // Add attributes
    await databases.createStringAttribute(
      'dictionaries',
      'dictionaries',
      'name',
      255,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'dictionaries',
      'displayName',
      255,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'dictionaries',
      'language',
      255,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'dictionaries',
      'languageCode',
      10,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'dictionaries',
      'description',
      1000,
      false
    );
    
    // For customProperties, we'll use a JSON string attribute
    await databases.createStringAttribute(
      'dictionaries',
      'dictionaries',
      'customProperties',
      5000,
      false
    );
    
    await databases.createDatetimeAttribute(
      'dictionaries',
      'dictionaries',
      'createdAt',
      true
    );
    
    await databases.createDatetimeAttribute(
      'dictionaries',
      'dictionaries',
      'updatedAt',
      true
    );
    
    console.log('Dictionaries collection created successfully');
  }
}

async function setupWordsCollection() {
  try {
    await databases.getCollection('dictionaries', 'words');
    console.log('Words collection already exists');
  } catch (error) {
    // Create collection
    await databases.createCollection(
      'dictionaries',
      'words',
      'Dictionary Words'
    );
    
    // Set permissions
    await databases.updateCollection(
      'dictionaries',
      'words',
      'Dictionary Words',
      ['role:all'], // Read
      ['role:admin'] // Write
    );
    
    // Add attributes
    await databases.createStringAttribute(
      'dictionaries',
      'words',
      'dictionaryId',
      36,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'words',
      'word',
      255,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'words',
      'languageCode',
      10,
      true
    );
    
    // For complex objects, we'll use JSON string attributes
    await databases.createStringAttribute(
      'dictionaries',
      'words',
      'firstLanguage',
      10000,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'words',
      'translated',
      10000,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'words',
      'metadata',
      2000,
      true
    );
    
    await databases.createDatetimeAttribute(
      'dictionaries',
      'words',
      'createdAt',
      true
    );
    
    await databases.createDatetimeAttribute(
      'dictionaries',
      'words',
      'updatedAt',
      true
    );
    
    // Create indexes for better query performance
    await databases.createIndex(
      'dictionaries',
      'words',
      'idx_dictionary_word',
      'key',
      ['dictionaryId', 'word'],
      []
    );
    
    await databases.createIndex(
      'dictionaries',
      'words',
      'idx_word_search',
      'fulltext',
      ['word'],
      []
    );
    
    console.log('Words collection created successfully');
  }
}

async function setupAdminsCollection() {
  try {
    await databases.getCollection('dictionaries', 'admins');
    console.log('Admins collection already exists');
  } catch (error) {
    // Create collection
    await databases.createCollection(
      'dictionaries',
      'admins',
      'Admin Users'
    );
    
    // Set permissions
    await databases.updateCollection(
      'dictionaries',
      'admins',
      'Admin Users',
      ['role:admin'], // Read
      ['role:superadmin'] // Write
    );
    
    // Add attributes
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'adminId',
      36,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'name',
      255,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'surname',
      255,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'email',
      255,
      true
    );
    
    await databases.createBooleanAttribute(
      'dictionaries',
      'admins',
      'isVerified',
      true,
      false
    );
    
    await databases.createBooleanAttribute(
      'dictionaries',
      'admins',
      'isSuperAdmin',
      true,
      false
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'language',
      10,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'profession',
      255,
      false
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'department',
      255,
      false
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'country',
      10,
      false
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'settings',
      5000,
      false
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'admins',
      'privileges',
      1000,
      true
    );
    
    await databases.createDatetimeAttribute(
      'dictionaries',
      'admins',
      'createdAt',
      true
    );
    
    // Create unique index for email
    await databases.createIndex(
      'dictionaries',
      'admins',
      'idx_email',
      'unique',
      ['email'],
      []
    );
    
    console.log('Admins collection created successfully');
  }
}

async function setupUserContributionsCollection() {
  try {
    await databases.getCollection('dictionaries', 'userContributions');
    console.log('User contributions collection already exists');
  } catch (error) {
    // Create collection
    await databases.createCollection(
      'dictionaries',
      'userContributions',
      'User Contributions'
    );
    
    // Set permissions
    await databases.updateCollection(
      'dictionaries',
      'userContributions',
      'User Contributions',
      ['role:admin'], // Read
      ['role:all'] // Write
    );
    
    // Add attributes
    await databases.createStringAttribute(
      'dictionaries',
      'userContributions',
      'userId',
      36,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'userContributions',
      'type',
      20,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'userContributions',
      'wordId',
      36,
      false
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'userContributions',
      'dictionaryId',
      36,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'userContributions',
      'content',
      10000,
      true
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'userContributions',
      'status',
      20,
      true,
      'pending'
    );
    
    await databases.createStringAttribute(
      'dictionaries',
      'userContributions',
      'reviewedBy',
      36,
      false
    );
    
    await databases.createDatetimeAttribute(
      'dictionaries',
      'userContributions',
      'reviewedAt',
      false
    );
    
    await databases.createDatetimeAttribute(
      'dictionaries',
      'userContributions',
      'createdAt',
      true
    );
    
    // Create indexes
    await databases.createIndex(
      'dictionaries',
      'userContributions',
      'idx_status',
      'key',
      ['status'],
      []
    );
    
    await databases.createIndex(
      'dictionaries',
      'userContributions',
      'idx_wordId',
      'key',
      ['wordId'],
      []
    );
    
    console.log('User contributions collection created successfully');
  }
}

// Run the setup
setupCollections();