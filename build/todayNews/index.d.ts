/**
 * Retrieves the news titles from "Hadshot Hayom" and returns them in a JSON format.
 *
 * @returns {Promise<{ [key: string]: number }>} An array of news titles extracted from the website or null if an error occurs.
 */
export declare function todayNews(): Promise<{
    [key: string]: number;
}>;
