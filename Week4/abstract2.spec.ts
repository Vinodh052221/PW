import { test } from '@playwright/test';

// Interface
interface DatabaseConnection {
    connect(): void;
    disconnect(): void;
    executeUpdate(): void;
}

// Concrete Class
class PlaywrightConnection implements DatabaseConnection {

    connect(): void {
        console.log("Database connection established.");
    }

    disconnect(): void {
        console.log("Database connection closed.");
    }

    executeUpdate(): void {
        console.log("Database update executed successfully.");
    }
}

// Playwright Test
test('Database Connection Example', async () => {

    const dbConnection = new PlaywrightConnection();

    dbConnection.connect();
    dbConnection.executeUpdate();
    dbConnection.disconnect();

});